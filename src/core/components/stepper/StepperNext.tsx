import { useContext } from "react";
import { Button } from "../buttons";
import { StepperCTX } from "./StepperContext";

const StepperNext: React.FC = () => {
  const { goNext } = useContext(StepperCTX);
  return (
    <Button variant="primary" rounded onClick={goNext}>
      Next
    </Button>
  );
};

export default StepperNext;

// * Keep the dots visible when the page reloads
// * Hide the tooltip when the user scrolls down.
// * Basically there will be only one set of dots opened at the same time
// *
