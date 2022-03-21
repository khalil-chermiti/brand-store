import React from 'react' ;

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSingin , inverted , ...otherProps }) => (
  <button
    className={`
      ${inverted ? "inverted" : ""}
      ${isGoogleSingin ? "google-signin" : ""}
      custom-button`
    }

    {...otherProps}
  >
    {children}
  </button>
); ;

export default CustomButton ; 