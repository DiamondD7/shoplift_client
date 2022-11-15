import React, { useState, useEffect, useRef } from "react";

import "../../styles/registerSigninStyle.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    fetch("https://shopliftserver.azurewebsites.net/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastname,
        email: email,
        phoneNumber: phoneNumber,
        username: user,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
      });
  };
  return (
    <div className="RegisterBody">
      {success ? (
        <div>
          <h1>Success!</h1>

          <span>
            <a href="/SignIn">Sign in</a>
          </span>
        </div>
      ) : (
        <div className="form-div">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1 className="register-h1">Register</h1>
            <label htmlFor="fname" className="fname-label">
              First name
            </label>
            <br />
            <input
              id="fname"
              type="text"
              className="fname-input"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label htmlFor="lname" className="fname-label">
              Last name
            </label>
            <br />
            <input
              id="lname"
              type="text"
              className="fname-input"
              onChange={(e) => setLastName(e.target.value)}
            />

            <br />
            <label htmlFor="email" className="fname-label">
              Email
            </label>

            <br />
            <input
              id="email"
              type="text"
              className="fname-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="phone" className="fname-label">
              Phone
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="fname-input"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <label htmlFor="username" className="fname-label">
              Username
            </label>
            <br />
            <input
              id="username"
              type="text"
              className="fname-input"
              onChange={(e) => setUser(e.target.value)}
              ref={userRef}
              autoComplete="off"
              required
              aria-invalid={validUser ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />

            <p
              id="uidnote"
              className={
                userFocus && user && !validUser ? "instructions" : "offscreen"
              }
            >
              4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscored, hyphens allowed.
            </p>
            <br />

            <label className="fname-label">Password</label>
            <br />
            <input
              type="password"
              className="fname-input"
              onChange={(e) => setPwd(e.target.value)}
              ref={userRef}
              required
              aria-invalid={validUser ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? "instructionsPwd" : "offscreen"
              }
            >
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
            <br />

            <label className="fname-label">Confirm Password:</label>
            <br />

            <input
              className="fname-input"
              type="password"
              ref={userRef}
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructionsConfPwd" : "offscreen"
              }
            >
              Must match the first password input field
            </p>

            <br />
            <button className="btn-regCancel">
              <a href="/">Cancel</a>
            </button>
            <button
              className="btn-regSubmit"
              disabled={!validUser || !validPwd || !validMatch ? true : false}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {success === false ? (
        <div className="second-div">
          <h2 className="register-statement">Join the Club</h2>
          <p className="register-p">
            Sign up for better deals and membership rewards! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Autem iure error,
            consequuntur deserunt mollitia veritatis
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;
