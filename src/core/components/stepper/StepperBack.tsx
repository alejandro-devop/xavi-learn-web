import { useContext } from "react";
import { Button } from "../buttons";
import { StepperCTX } from "./StepperContext";

interface StepperNextProps {
  label?: string;
}

const StepperBack: React.FC<StepperNextProps> = ({ label }) => {
  const { goBack, isInFirstStep } = useContext(StepperCTX);
  if (isInFirstStep) return null;
  return (
    <Button rounded onClick={goBack}>
      {label || "Previous"}
    </Button>
  );
};

export default StepperBack;
