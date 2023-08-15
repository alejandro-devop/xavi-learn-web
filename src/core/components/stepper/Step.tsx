import styles from "./step.module.scss";
interface StepProps {
  children?: React.ReactNode;
  title?: string;
}

const Step: React.FC<StepProps> = ({ children, title }) => {
  return (
    <div className={styles.step}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Step;
