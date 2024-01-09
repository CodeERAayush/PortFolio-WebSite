import React from "react";
import "./BottomArea.css"; 

function BottomArea() {
  return (
    <div className="footer">
      <div className="top-area-footer">
        
        <div className="left-part-top-footer">

          <div className="section-inside">
            <h2>Thankyou ❤️</h2>
          </div>
          <div className="section-inside">
          <span className="mail-us">Social:</span>
            <a href="https://www.linkedin.com/in/aayush-pandey-a8b65b203/" target="_main" className="section-footer">Linkedin</a>
            <a href="https://github.com/CodeERAayush" target="_main" className="section-footer">Github</a>
            <a href="https://www.instagram.com/_ayushpandey_/" target="_main" className="section-footer">Instagram</a>
            <a href="https://www.youtube.com/channel/UCa4lAktIKvoSiBerteyE70w" target="_main" className="section-footer">Youtube</a>
          </div>

        </div>


        <div className="mid-vertical-line">
        </div>


        <div className="right-part-top-footer">
          <div className="right-part-top-footer-elements">
            <span className="mail-us">Mail me:</span>
            <p className="mail-us-footer">dev.aayushpandey@gmail.com</p>
            <p className="mail-us-footer">aayushpandey1100@gmail.com</p>
          </div>

          <div className="right-part-top-footer-elements">
          <span className="mail-us">Contact:</span>
            <p className="mail-us-footer">dev.aayushpandey1100@gmail.com</p>
            <p className="mail-us-footer">Call: +917860456546</p>
            <p className="mail-us-footer">Ramjanki Nagar</p>
            <p className="mail-us-footer">Nakha No 1, Basharatpur</p>
            <p className="mail-us-footer">Pin: 273004 , 0551</p>
            <p className="mail-us-footer">Gorakhpur, UttarPradesh</p>
            <p className="mail-us-footer">India</p>
          </div>



        </div>


      </div>






      <div className="bottom-area-footer">
        <a href="https://drive.google.com/file/d/1J2CSFAyuWn9DOoWty3i5lVUy_VNSrpRc/view?usp=sharing" className="bottom-area-options">View My CV</a>
        <p className="bottom-area-options">Projects</p>
        <p className="bottom-area-options">Experience</p>
        <p className="bottom-area-options">Skills</p>
        <p style={{color:"white",fontSize:10}}>©2023 Codeeraayush-portfolio</p>
      </div>
    </div>
  );
}

export default BottomArea;
