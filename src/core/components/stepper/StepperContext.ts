import { createContext } from "react";
type StepperCTXType = {
  goNext: () => void;
  goBack: () => void;
};
const StepperCTX = createContext<StepperCTXType>({
  goNext: () => {},
  goBack: () => {},
});
const StepperProvider = StepperCTX.Provider;
const StepperConsumer = StepperCTX.Consumer;

export { StepperCTX, StepperProvider, StepperConsumer };
