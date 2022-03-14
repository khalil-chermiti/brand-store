import React from 'react' ;
import './custom-button.style.scss';


const CustomButton = ({ children, isGoogleSingin , ...otherProps }) => (
  <button
    className={`${isGoogleSingin ? "google-signin" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
); ;

export default CustomButton ; 