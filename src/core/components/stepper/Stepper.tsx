import React, { useMemo, useState } from "react";
import Step from "./Step";
import StepWrapper from "./StepWrapper";
import StepperActions from "./StepperActions";
import { StepperProvider } from "./StepperContext";
import _ from "lodash";
import styles from "./stepper.module.scss";
import classNames from "classnames";

interface StepperProps {
  children?: React.ReactNode;
}

const Stepper: React.FC<StepperProps> = ({ children }) => {
  const [currentStep, setStep] = useState<number>(0);
  const stepsToRender = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === Step) {
        return child;
      }
      return null;
    })?.filter((item) => Boolean(item));
  }, [children]);

  const otherPieces = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === StepperActions) {
        return child;
      }
      return null;
    })?.filter((item) => Boolean(item));
  }, [children]);
  const stepDisplay = useMemo(() => currentStep + 1, [currentStep]);
  const totalSteps = useMemo(() => stepsToRender?.length || 0, [stepsToRender]);

  const handleNext = () => {
    let newStep = currentStep + 1;
    if (newStep < totalSteps) {
      setStep(newStep);
    }
  };
  const handleBack = () => {
    let newStep = currentStep - 1;
    if (newStep >= 0) {
      setStep(newStep);
    }
    // if (newStep < 0) {
    //   newStep = totalSteps - 1;
    // }
  };

  return (
    <StepperProvider
      value={{
        goNext: handleNext,
        goBack: handleBack,
      }}
    >
      <div className={styles.stepperRoot}>
        {_.range(0, totalSteps).map((item, key) => (
          <div
            className={classNames(styles.stepperStep, {
              [styles.active]: key < currentStep,
            })}
            key={`step-${key}`}
          >
            <div
              className={classNames(styles.stepperStepWrapper, {
                [styles.active]: key <= currentStep,
              })}
            >
              <span>{item + 1}</span>
            </div>
          </div>
        ))}
      </div>
      {stepsToRender?.[currentStep]}
      {otherPieces?.map((item, key) => (
        <StepWrapper key={`step-${key}`}>{item}</StepWrapper>
      ))}
    </StepperProvider>
  );
};

export default Stepper;
