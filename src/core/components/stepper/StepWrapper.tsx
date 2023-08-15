interface StepWrapperProps {
  children?: React.ReactNode;
}
const StepWrapper: React.FC<StepWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default StepWrapper;
