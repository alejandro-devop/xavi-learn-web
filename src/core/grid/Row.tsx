import styles from "./row.module.scss";

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
