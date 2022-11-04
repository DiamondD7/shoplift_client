import React from "react";
import {
  ArrowBendDownRight,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "phosphor-react";
const Footer = () => {
  return (
    <footer>
      <h1>Shoplift NZ</h1>
      <h3>Your trusted brand, Where you can buy with no worries!</h3>

      <div className="feedback">
        <h2>Let us know what you think.</h2>
        <ArrowBendDownRight size={32} />
        <button>Submit Feedback</button>
      </div>

      <div className="social">
        <p>Follow us</p>
        <div className="socialmedia">
          <FacebookLogo size={30} />
          <InstagramLogo size={30} />
          <TwitterLogo size={30} />
        </div>
      </div>

      <div className="contact">
        <p className="contact-text">Contact us</p>
        <p className="number">021-021-000</p>
      </div>

      <p className="copyright">&copy; Aaron ∙ 2022 ∙</p>
    </footer>
  );
};

export default Footer;
