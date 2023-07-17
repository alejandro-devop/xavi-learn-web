import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <div id="main-side-bar">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/learning">Learning</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
