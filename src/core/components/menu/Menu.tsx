import Icon from "core/components/icon";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import { useMediaQuery } from "core/hooks";
import classNames from "classnames";
import useAppConfig from "core/hooks/useAppConfig";
import Picture from "../picture/Picture";
import logo from "assets/logo.png";

const Menu: React.FC = () => {
  const { toggleNavbar, openedNavbar } = useAppConfig();
  // const [opened, setOpened] = useState(false);
  const { isIn } = useMediaQuery();
  // const toggleMenu = () => setOpened(!opened);
  const isMobile = isIn(["xs", "sm", "md"]);

  return (
    <div
      className={classNames({
        [styles.sideBarWrapper]: openedNavbar && isMobile,
      })}
    >
      <div
        id="side-bar"
        className={classNames(styles.sideBar, {
          [styles.mobileBar]: isMobile,
          [styles.opened]: openedNavbar,
        })}
      >
        {isMobile && (
          <button onClick={toggleNavbar} className={styles.closeButton}>
            <Icon icon="times" className={styles.closeButtonIcon} />
          </button>
        )}

        <div className={styles.sideBarHeader}>
          <div className={styles.sideBarHeaderLogoWrapper}>
            <Picture src={logo} />
          </div>
          <div className={styles.sideBarTitleWrapper}>
            <h3>Xavier life</h3>
          </div>
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
            <Icon icon="tag" />
            <NavLink to="/habits-list">Habits</NavLink>
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
    </div>
  );
};

export default Menu;
