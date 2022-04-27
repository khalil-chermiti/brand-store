import React , {useState} from "react";
import { connect } from "react-redux";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart , emailSignInStart} from '../../redux/user/user.actions' ;

const SignIn = ({googleSignInStart , emailSignInStart}) => {

  const [credentials , setCredentials] = useState({email: "" , password: ""}) ;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    emailSignInStart(email , password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials , [name]: value });
  };

  return (
    
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={credentials.email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={credentials.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignin
          >
            google Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
}


const mapDispatch = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()) ,
  emailSignInStart : (email , password) => dispatch(emailSignInStart({email , password})) ,
})

export default connect(null , mapDispatch)(SignIn);
