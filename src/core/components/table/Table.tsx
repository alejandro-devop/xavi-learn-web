import IconButton from "core/components/buttons/icon-button";
import { useCallback } from "react";
import styles from "./table.module.scss";
import TableFilters from "./TableFilters";
import TableActions from "./TableActions";
import TableFooter from "./TableFooter";
import { ActionType } from "./types";
import classNames from "classnames";
import { useMediaQuery } from "core/hooks";

interface TableProps {
  tableActions?: ActionType[];
  colLabels?: { [k: string]: string };
  columns: string[];
  data?: { [k: string]: any }[];
  title?: string;
  actions?: ActionType[];
  onActionCalled?: (action: string, item: any) => void;
  onTableActionCalled?: (action: string, item: any) => void;
}

interface RenderRowProps {
  actions?: ActionType[];
  handleAction: (action: string, item: any) => void;
  colLabels?: { [k: string]: string };
  rowId: string;
  cols: string[];
  data: { [k: string]: any };
}

const RenderRow: React.FC<RenderRowProps> = ({
  actions,
  cols,
  colLabels,
  data,
  rowId,
  handleAction,
}) => {
  return (
    <tr>
      {cols.map((key, index) => (
        <td
          data-label={colLabels ? colLabels[key] || key : key}
          key={`${rowId}-${index}`}
        >
          {data[key]}
        </td>
      ))}
      {actions?.length && (
        <td data-label={"Actions"}>
          {actions.map((item, index) => (
            <IconButton
              icon={item.icon}
              onClick={() => handleAction(item.action, data)}
              key={`${index}-${item.action}`}
            />
          ))}
        </td>
      )}
    </tr>
  );
};

const Table: React.FC<TableProps> = ({
  actions,
  data,
  colLabels = {},
  columns,
  onActionCalled,
  onTableActionCalled,
  tableActions,
}) => {
  const { isIn } = useMediaQuery();
  const handleActionTriggered = useCallback(
    (action: string, item: any) => {
      onActionCalled?.(action, item);
    },
    [onActionCalled]
  );

  const isMobile = isIn(["xs", "sm", "md"]);

  return (
    <div className={classNames(styles.table)}>
      <div className={styles.tableToolbar}>
        <div className={styles.tableToolbarLeft}>
          <TableFilters />
        </div>
        <div className={styles.tableToolbarRight}>
          <TableActions
            actions={tableActions}
            onActionCalled={onTableActionCalled}
          />
        </div>
      </div>
      <table className={classNames({ [styles.isMobile]: isMobile })}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={`title-${index}`}>
                <span>{colLabels[col] || col}</span>
              </th>
            ))}
            {actions?.length && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((rowData, index) => (
            <RenderRow
              handleAction={handleActionTriggered}
              actions={actions}
              rowId={`${index}`}
              colLabels={colLabels}
              cols={columns}
              data={rowData}
              key={`row-${index}`}
            />
          ))}
        </tbody>
      </table>
      <TableFooter />
    </div>
  );
};

export default Table;
