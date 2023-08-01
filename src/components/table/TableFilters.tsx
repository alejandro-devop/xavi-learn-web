import IconButton from "components/buttons/icon-button";
import { TextField } from "components/form";
import styles from "./table-filters.module.scss";
import classNames from "classnames";

interface TableFiltersProps {}

const TableFilters: React.FC<TableFiltersProps> = () => {
  return (
    <div className={classNames("flex", styles.tableFilters)}>
      <TextField icon="search" placeholder="Enter criteria to filter..." />
      <IconButton icon="filter" />
    </div>
  );
};

export default TableFilters;
