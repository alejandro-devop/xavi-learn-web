import styles from "./status-bar.module.scss";

const StatusBar: React.FC = () => {
  return (
    <div className={styles.status}>
      <div className={styles.statusBeginWrapper}>
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
      </div>
    </div>
  );
};

export default StatusBar;
