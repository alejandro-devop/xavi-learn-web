import Fieldset from "../fieldset/Fieldset";
import Select from "react-select";
import styles from "./select.module.scss";
import Label from "../label/Label";
interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | null;
  options?: { label: string; value: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label: inputLabel,
  placeholder = "",
  error,
  id,
  onChange,
  name,
  options = [],
}) => {
  const handleChange = (data: any) => {
    onChange?.({
      target: {
        name: name || "",
        value: data.value,
      },
    } as any);
  };
  return (
    <Fieldset>
      {inputLabel && (
        <Label htmlFor={id} className={styles.inputLabel}>
          {inputLabel}
          {error && <span className={styles.formErrorMsg}>{error}</span>}
        </Label>
      )}
      <Select
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: 10,
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            outline: "none",
          }),
        }}
      />
    </Fieldset>
  );
};

export default SelectField;
