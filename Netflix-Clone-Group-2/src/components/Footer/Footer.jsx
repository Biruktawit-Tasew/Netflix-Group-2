import React from "react";
import styles from "./footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <div className={styles.icons}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_list}>
          <ul>
            <li>Audio Description</li>
            <li> Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p className={styles.service_code}>Service Code</p>
          <p className={styles.copy_write}>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
