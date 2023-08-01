import IconButton from "components/buttons/icon-button";
import { useCallback } from "react";
import styles from "./table.module.scss";
import TableFilters from "./TableFilters";
import TableActions from "./TableActions";
import TableFooter from "./TableFooter";
import { ActionType } from "./types";

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
  rowId: string;
  cols: string[];
  data: { [k: string]: any };
}

const RenderRow: React.FC<RenderRowProps> = ({
  actions,
  cols,
  data,
  rowId,
  handleAction,
}) => {
  return (
    <tr>
      {cols.map((key, index) => (
        <td key={`${rowId}-${index}`}>{data[key]}</td>
      ))}
      {actions?.length && (
        <td>
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
  const handleActionTriggered = useCallback(
    (action: string, item: any) => {
      onActionCalled?.(action, item);
    },
    [onActionCalled]
  );

  return (
    <div className={styles.table}>
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
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={`title-${index}`}><span>{colLabels[col] || col}</span></th>
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
