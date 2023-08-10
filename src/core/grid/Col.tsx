import classNames from "classnames";
import styles from "./col.module.scss";

interface ColProps {
  children: React.ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Col: React.FC<ColProps> = ({ size, children }) => {
  console.log("styles: ", styles);
  return (
    <div className={classNames(styles.col, styles[`size_${size}`])}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  size: 1,
};

export default Col;
