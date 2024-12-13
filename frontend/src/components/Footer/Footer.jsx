import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-con" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1 className="heading">Order Now</h1>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            praesentium similique, fugiat vero distinctio officia quibusdam quae
            hic corporis, consequuntur corrupti ducimus? Obcaecati rerum sint
            beatae distinctio impedit! Consequuntur, aut.
          </p>
          <div className="icons-con">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-569-8795</li>
            <li>contact@ordernow.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copy-right">
        Copyright 2024 Order now -All Right Reserved.
      </p>
    </div>
  );
};
export default Footer;
