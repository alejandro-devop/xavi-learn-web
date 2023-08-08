import Icon from "core/components/icon";
import { IconType } from "core/components/icon/Icon";
import styles from "./icon-button.module.scss";
interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <button {...props} type="button" className={styles.iconButton}>
      {children ? children : <Icon icon={icon} />}
    </button>
  );
};

export default IconButton;
