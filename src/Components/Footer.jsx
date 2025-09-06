// حط كل الـ imports فوق
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Location Section */}
      <div className="footer-section">
        <h3>LOCATION</h3>
        <p>
          2215 John Daniel Drive <br /> Clark, MO 65243
        </p>
      </div>

      {/* Social Icons Section */}
      <div className="footer-section">
        <h3>AROUND THE WEB</h3>
        <div className="icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaGlobe />
        </div>
      </div>

      {/* About Section */}
      <div className="footer-section">
        <h3>ABOUT FREELANCER</h3>
        <p>
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>

      {/* CopyRight */}
   {/* CopyRight */}
<div className="CopyRight">
  <p>© 2025 Ahmed Samy - All Rights Reserved</p>
</div>
    </footer>
  );
}
