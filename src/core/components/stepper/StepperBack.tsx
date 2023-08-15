import { useContext } from "react";
import { Button } from "../buttons";
import { StepperCTX } from "./StepperContext";

const StepperBack: React.FC = () => {
  const { goBack } = useContext(StepperCTX);
  return (
    <Button rounded onClick={goBack}>
      Back
    </Button>
  );
};

export default StepperBack;
