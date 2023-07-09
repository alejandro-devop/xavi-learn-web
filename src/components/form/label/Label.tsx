interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Facade for the html label element. It is used to create labels for form elements.
 * any common functionality can be implemented here
 * @param param0
 * @returns
 */
const Label: React.FC<LabelProps> = ({ children }) => {
  return <label>{children}</label>;
};

export default Label;
