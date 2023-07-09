export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldSetProps?: React.HTMLAttributes<HTMLElement>;
  label?: string;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
}
