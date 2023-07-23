import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconType = "tag" | "graduation-cap" | "cogs" | "user" | "gauge";

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
