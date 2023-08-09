import Icon from "core/components/icon";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import { useState } from "react";
import { useMediaQuery } from "core/hooks";
import classNames from "classnames";
import useAppConfig from "core/hooks/useAppConfig";

const Menu: React.FC = () => {
  const { toggleNavbar, openedNavbar } = useAppConfig();
  // const [opened, setOpened] = useState(false);
  const { isIn } = useMediaQuery();
  // const toggleMenu = () => setOpened(!opened);
  const isMobile = isIn(["xs", "sm", "md"]);
  console.log(openedNavbar);
  return (
    <>
      <div
        id="side-bar"
        className={classNames(styles.sideBar, {
          [styles.mobileBar]: isMobile,
          [styles.opened]: openedNavbar,
        })}
      >
        {isMobile && (
          <button onClick={toggleNavbar}>
            <Icon icon="times" />
          </button>
        )}

        <div className={styles.sideBarHeader}>
          <div className={styles.sideBarHeaderLogoWrapper}>
            <span></span>
          </div>
          <div className={styles.sideBarTitleWrapper}></div>
        </div>
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
          <li>
            <Icon icon="flask" />
            <NavLink to="/testing-hall">Testing hall</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
