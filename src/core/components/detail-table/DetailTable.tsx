import styles from "./detail-table.module.scss";
import classNames from "classnames";

interface DetailTableProps {
  data: { label: string; value?: any }[];
}

const DetailTable: React.FC<DetailTableProps> = ({ data }) => {
  return (
    <div className={classNames(styles.tableDetail, "flex-1")}>
      <table>
        <tbody>
          {data.map((item, key) => (
            <tr key={`table-detail-${key}`}>
              <th>{item.label}</th>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
