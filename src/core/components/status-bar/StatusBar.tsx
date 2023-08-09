import Icon from "core/components/icon";
import styles from "./status-bar.module.scss";
import { useMediaQuery } from "core/hooks";
import useAppConfig from "core/hooks/useAppConfig";

const StatusBar: React.FC = () => {
  const { isIn } = useMediaQuery();
  const { toggleNavbar } = useAppConfig();
  return (
    <div className={styles.status}>
      {isIn(["xs", "sm", "md"]) && (
        <button className={styles.toggleButton} onClick={toggleNavbar}>
          <Icon icon="bars" />
        </button>
      )}
      {/* <div className={styles.statusBeginWrapper}>
        <div className={styles.statusIconButton}></div>
      </div>
      <div className={styles.statusMiddleWrapper}>
        <div className={styles.statusIconButton}></div>
        <div className={styles.statusInput}></div>
      </div>
      <div className={styles.statusEndWrapper}>
        <div className={styles.statusIconButton}></div>
        <div className={styles.statusIconButton}></div>
        <div className={styles.statusIconButton}></div>
      </div> */}
    </div>
  );
};

export default StatusBar;
