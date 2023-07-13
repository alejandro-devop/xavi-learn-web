import Fieldset from "../fieldset/Fieldset";
import Label from "../label";

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | null;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  error,
  value,
  ...props
}) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <textarea {...props} value={value || ""} />
      {error && <span className="form-error-msg">{error}</span>}
    </Fieldset>
  );
};

export default TextAreaField;
