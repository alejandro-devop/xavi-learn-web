import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "./types";
export * from "./types";

interface IconProps {
  className?: string;
  icon?: IconType;
}

const Icon: React.FC<IconProps> = ({ icon = "tag", className }) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

Icon.defaultProps = {
  icon: "tag",
};

export default Icon;
