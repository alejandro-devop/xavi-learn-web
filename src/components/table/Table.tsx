interface TableProps {
  colLabels?: { [k: string]: string };
  columns: string[];
  data?: { [k: string]: any }[];
  title?: string;
}

interface RenderRowProps {
  rowId: string;
  cols: string[];
  data: { [k: string]: any };
}

const RenderRow: React.FC<RenderRowProps> = ({ cols, data, rowId }) => {
  return (
    <tr>
      {cols.map((key, index) => (
        <td key={`${rowId}-${index}`}>{data[key]}</td>
      ))}
    </tr>
  );
};

const Table: React.FC<TableProps> = ({
  data,
  colLabels = {},
  columns,
  title,
}) => {
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
          </tr>
        </thead>
        <tbody>
          {data?.map((rowData, index) => (
            <RenderRow
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
