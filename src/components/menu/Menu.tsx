import Icon from "components/icon";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <div id="main-side-bar">
        <ul>
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
