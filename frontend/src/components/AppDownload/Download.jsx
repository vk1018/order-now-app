import { assets } from "../../assets/assets";
import "./Download.css";

const Download = () => {
  return (
    <div className="download-con" id="download">
      <p>For Better Experience download Order Now App</p>
      <div className="img-con">
        <img src={assets.play_store} alt="playstore"></img>
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
};

export default Download;
