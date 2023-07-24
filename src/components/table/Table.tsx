import { Button } from "components/buttons";
import { useCallback } from "react";

interface TableProps {
  colLabels?: { [k: string]: string };
  columns: string[];
  data?: { [k: string]: any }[];
  title?: string;
  actions?: string[];
  onActionCalled?: (action: string, item: any) => void;
}

interface RenderRowProps {
  actions?: string[];
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
          {actions.map((action, index) => (
            <Button
              onClick={() => handleAction(action, data)}
              key={`${index}-${action}`}
            >
              {action}
            </Button>
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
  title,
  onActionCalled,
}) => {
  const handleActionTriggered = useCallback((action: string, item: any) => {
    onActionCalled?.(action, item);
  }, []);
  return (
    <div>
      {title && (
        <div>
          <h3>{title}</h3>
        </div>
      )}
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={`title-${index}`}>{colLabels[col] || col}</th>
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
    </div>
  );
};

export default Table;
