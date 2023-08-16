import { createContext } from "react";
type StepperCTXType = {
  goNext: () => void;
  goBack: () => void;
  isInFirstStep: boolean;
  isInLastStep: boolean;
};
const StepperCTX = createContext<StepperCTXType>({
  goNext: () => {},
  goBack: () => {},
  isInFirstStep: false,
  isInLastStep: false,
});
const StepperProvider = StepperCTX.Provider;
const StepperConsumer = StepperCTX.Consumer;

export { StepperCTX, StepperProvider, StepperConsumer };
