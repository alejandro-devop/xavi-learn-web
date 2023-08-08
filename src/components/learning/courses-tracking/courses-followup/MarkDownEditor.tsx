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
    <div className="mb-4">
      <MDEditor
        value={value as string}
        onChange={handleChange}
        components={{
          toolbar: () => null,
        }}
        height={600}
      />
    </div>
  );
};

export default MakrDownEditor;
