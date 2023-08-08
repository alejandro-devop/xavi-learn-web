interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Facade for the html button element. It is used to create buttons.
 * any functionality that is common to all buttons should be implemented here.
 * @param param0
 * @returns
 */
const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonBase;
