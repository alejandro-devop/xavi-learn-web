import { ActionType } from "./types";
import styles from "./table-actions.module.scss";
import { Button } from "core/components/buttons";

interface TableActionsProps {
  actions?: ActionType[];
  onActionCalled?: (action: string, item: any) => void;
}

const TableActions: React.FC<TableActionsProps> = ({
  actions,
  onActionCalled,
}) => {
  return (
    <div className={styles.tableActions}>
      {actions?.map((item, index) => (
        <Button
          key={`table-action-${index}`}
          icon={item.icon}
          onClick={() => onActionCalled?.(item.action, item)}
          {...item.buttonProps}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default TableActions;
