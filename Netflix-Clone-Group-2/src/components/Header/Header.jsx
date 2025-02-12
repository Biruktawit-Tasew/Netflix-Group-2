import React from "react";
import styles from "./header.module.css";
import NetflixLogo from '../../assets/images/netflix-3.svg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_container}>
          <ul>
            <li>
              <img src={NetflixLogo} alt="NetflixLogo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className={styles.right_container}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
