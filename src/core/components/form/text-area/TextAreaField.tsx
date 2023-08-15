import Fieldset from "../fieldset/Fieldset";
import Label from "../label";
import styles from "./textarea.module.scss";

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | null;
  max?: number;
  hideMax?: number | boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  error,
  value,
  max,
  hideMax,
  ...props
}) => {
  return (
    <Fieldset className={styles.textAreaRoot}>
      {label && (
        <Label className={styles.inputLabel} htmlFor={props?.id}>
          {label}
          {error && <span className={styles.formErrorMsg}>{error}</span>}
        </Label>
      )}
      <textarea
        maxLength={max}
        className={styles.textArea}
        value={value || ""}
        {...props}
      />

      {max && !hideMax && (
        <span className={styles.charCount}>
          {`${value || ""}`?.length}/{max}
        </span>
      )}
    </Fieldset>
  );
};

TextAreaField.defaultProps = {
  value: "",
  max: 255,
};

export default TextAreaField;
