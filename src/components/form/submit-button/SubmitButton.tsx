import { ButtonBase } from "components/buttons";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Facade for the html button element. It is used to create buttons.
 * any functionality that is common to all submit buttons should be implemented here.
 * @param param0
 * @returns
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonBase {...props} type="submit">
      {children}
    </ButtonBase>
  );
};
export default SubmitButton;