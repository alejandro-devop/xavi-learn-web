import styles from "./page-title.module.scss";

interface PageTitleProps {
  title?: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
      <span className={styles.separator}>|</span>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default PageTitle;
