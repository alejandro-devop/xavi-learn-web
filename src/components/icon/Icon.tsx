import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type IconType =
  | "add"
  | "angles-left"
  | "angles-right"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "chevron-down"
  | "cogs"
  | "eye"
  | "edit"
  | "filter"
  | "flask"
  | "gauge"
  | "graduation-cap"
  | "search"
  | "tag"
  | "times"
  | "trash"
  | "user";

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
