import React from "react";

import "../../styles/registerSigninStyle.css";
const Register = () => {
  return (
    <div>
      <h1 className="register-h1">Register</h1>
      <form className="form-container">
        <label htmlFor="fname" className="fname-label">
          First Name
        </label>
        <br />
        <input id="fname" type="text" className="fname-input" />
        <br />
        <label htmlFor="fname" className="fname-label">
          Last Name
        </label>
        <br />
        <input id="fname" type="text" className="fname-input" />
        <br />
        <label htmlFor="email" className="fname-label">
          Email
        </label>

        <br />
        <input id="email" type="text" className="fname-input" />
        <br />
        <label htmlFor="phone" className="fname-label">
          Phone
        </label>
        <br />
        <input id="phone" type="text" className="fname-input" />
      </form>
    </div>
  );
};

export default Register;
