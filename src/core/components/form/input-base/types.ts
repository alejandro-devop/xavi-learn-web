export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  fieldSetProps?: React.HTMLAttributes<HTMLElement>;
  label?: string;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  error?: string | null;
}
