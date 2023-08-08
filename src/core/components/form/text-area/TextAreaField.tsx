import Fieldset from "../fieldset/Fieldset";
import Label from "../label";
import styles from "./textarea.module.scss";

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
    <Fieldset className={styles.textAreaRoot}>
      {label && (
        <Label className={styles.inputLabel} htmlFor={props?.id}>
          {label}
        </Label>
      )}
      <textarea {...props} className={styles.textArea} value={value || ""} />
      {error && <span className="form-error-msg">{error}</span>}
    </Fieldset>
  );
};

TextAreaField.defaultProps = {
  value: "",
};

export default TextAreaField;
