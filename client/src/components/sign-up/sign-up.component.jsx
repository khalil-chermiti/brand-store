import React , {useState} from "react";
import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {

  const [userData , setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }) ;
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      // clear input fields after signup
      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (err) {
      alert("error signing user up " + err.message) ;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData , [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userData ;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
