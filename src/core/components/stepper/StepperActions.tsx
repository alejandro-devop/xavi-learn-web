interface StepperActionsProps {
  children?: React.ReactNode;
}
const StepperActions: React.FC<StepperActionsProps> = ({ children }) => {
  return <div className="flex flex-1 mt-10 justify-center">{children}</div>;
};

export default StepperActions;
