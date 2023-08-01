import styles from "./skeletons.module.scss";
export const InputSkeleton: React.FC = () => {
  return null;
};

export const ButtonSekeleton: React.FC = () => {
  return <div className={styles.buttonSkeleton} />;
};

export const InputWithIconSkeleton: React.FC = () => {
  return (
    <div className={styles.inputWithIconSkeleton}>
      <div className={styles.inputIcon} />
      <div className={styles.inputSkeleton} />
      <div className={styles.inputIcon} />
    </div>
  );
};
