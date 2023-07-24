import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconType = "cogs" | "flask" | "gauge" | "graduation-cap" | "user" | "tag";

interface IconProps {
  icon?: IconType;
}

const Icon: React.FC<IconProps> = ({ icon = "tag" }) => {
  return <FontAwesomeIcon icon={icon} />;
};

Icon.defaultProps = {
  icon: "tag",
};

export default Icon;
