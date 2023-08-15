import { useState } from "react";
import { InputBaseProps } from "../input-base/types";
import Label from "../label/Label";
import styles from "./options-button.module.scss";

interface OptionsButtonProps extends InputBaseProps {
  options: { label: string; value: any }[];
}

const OptionsButton: React.FC<OptionsButtonProps> = ({
  name,
  label,
  options = [],
  value,
  onChange,
}) => {
  const [selected, setSelected] = useState<any>(value);
  const changeValue = (newValue: any) => {
    setSelected(newValue);
    onChange?.({
      target: {
        name: name || "",
        value: newValue,
      },
    } as any);
  };
  return (
    <div className={styles.buttonsRoot}>
      {label && <Label className={styles.mainLabel}>{label}</Label>}
      {options.map((item, key) => (
        <Label key={`option-${key}`} className={styles.label}>
          <input
            type="radio"
            name={name}
            onClick={() => changeValue(item.value)}
            onChange={() => null}
            checked={selected === item.value}
          />
          <span className={styles.control}></span>
          <span>{item.label}</span>
        </Label>
      ))}
    </div>
  );
};

export default OptionsButton;
