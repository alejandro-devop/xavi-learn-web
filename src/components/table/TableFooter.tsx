import IconButton from "components/buttons/icon-button";
import styles from "./table-footer.module.scss";
import _ from "lodash";

const TableFooter: React.FC = () => {
  const pages = _.range(1, 6);
  return (
    <div className={styles.tableFooter}>
      <div className={styles.pagesWrapper}>
        <ul>
          <li>
            <IconButton icon="angles-left" />
          </li>
          <li>
            <IconButton icon="chevron-left" />
          </li>
          <li>
            {pages.map((page) => (
              <IconButton key={`page-${page}`}>{page}</IconButton>
            ))}
          </li>
          <li>
            <IconButton icon="chevron-right" />
          </li>
          <li>
            <IconButton icon="angles-right" />
          </li>
        </ul>
        <span className={styles.legend}>Showing 1 to 10 of 500 entries</span>
      </div>
      <div className={styles.footerActions}></div>
    </div>
  );
};

export default TableFooter;
