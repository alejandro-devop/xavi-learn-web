import Icon from "components/icon";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu: React.FC = () => {
  return (
    <>
      <div id="side-bar" className={styles.sideBar}>
        <div className={styles.sideBarHeader}>
          <div className={styles.sideBarHeaderLogoWrapper}>
            <span></span>
          </div>
          <div className={styles.sideBarTitleWrapper}></div>
        </div>
        {/* <div className={styles.sideBarAvatarWrapper}>
          <div className={styles.sideBarAvatar}></div>
          <div className={styles.sideBarUserName}></div>
          <div className={styles.sideBarUserName}></div>
        </div> */}
        <ul className={styles.sideBarMenu}>
          <li>
            <Icon icon="gauge" />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <Icon icon="graduation-cap" />
            <NavLink to="/learning">Learning</NavLink>
          </li>
          <li>
            <Icon icon="cogs" />
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <Icon icon="user" />
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
