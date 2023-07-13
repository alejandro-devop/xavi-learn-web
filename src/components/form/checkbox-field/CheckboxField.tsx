import Fieldset from "../fieldset/Fieldset";
import { InputBaseProps } from "../input-base/types";
import Label from "../label/Label";

interface CheckboxFieldProps extends InputBaseProps {}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  error,
  value,
  ...props
}) => {
  return (
    <Fieldset>
      <Label>{label}</Label>
      <input {...props} type="checkbox" checked={Boolean(value)} />
      {error && <span className="form-error-msg">{error}</span>}
    </Fieldset>
  );
};

export default CheckboxField;
