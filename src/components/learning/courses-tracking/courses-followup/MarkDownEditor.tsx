import { InputBaseProps } from "components/form/input-base/types";
import MDEditor from "@uiw/react-md-editor";
const MakrDownEditor: React.FC<InputBaseProps> = ({
  name = "",
  value,
  ...props
}) => {
  const handleChange = (value: any) => {
    props?.onChange?.({ target: { name, value } } as any);
  };
  return (
    <div className="flex">
      <div className="flex-1">
        <MDEditor
          value={value as string}
          onChange={handleChange}
          components={{
            toolbar: () => null,
          }}
          height={600}
        />
      </div>
    </div>
  );
};

export default MakrDownEditor;
