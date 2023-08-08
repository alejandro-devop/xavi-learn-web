import { useState } from "react";
import Fieldset from "../fieldset/Fieldset";
import { InputBaseProps } from "../input-base/types";
import Label from "../label/Label";
import styles from "./checkbox.module.scss";
import classNames from "classnames";

interface CheckboxFieldProps extends InputBaseProps {}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  error,
  value,
  ...props
}) => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
  };
  return (
    <Fieldset className={styles.wrapper}>
      <input
        id="some-some-checkbox"
        {...props}
        className={styles.input}
        type="checkbox"
        checked={Boolean(checked)}
        onClick={handleChange}
        onChange={() => null}
      />
      <Label
        className={classNames(styles.inputLabel, {
          [styles.checked]: checked,
        })}
        onClick={handleChange}
      >
        {label}
      </Label>
      {error && <span className="form-error-msg">{error}</span>}
    </Fieldset>
  );
};

export default CheckboxField;
