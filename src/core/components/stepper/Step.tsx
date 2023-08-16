import styles from "./step.module.scss";
interface StepProps {
  children?: React.ReactNode;
  description?: string;
  title?: string;
}

const Step: React.FC<StepProps> = ({ children, description, title }) => {
  return (
    <div className={styles.step}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
};

export default Step;
