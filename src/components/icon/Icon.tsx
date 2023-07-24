import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type IconType =
  | "cogs"
  | "flask"
  | "gauge"
  | "graduation-cap"
  | "user"
  | "tag";

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
