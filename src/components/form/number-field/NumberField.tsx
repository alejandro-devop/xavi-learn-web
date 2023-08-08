import React, {
  ChangeEventHandler,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { InputBaseProps } from "../input-base/types";
import TextField from "../text-field/TextField";
import IconButton from "components/buttons/icon-button";

interface NumberFieldProps extends InputBaseProps {
  max?: number;
  min?: number;
  step?: number;
}

const NumberField: React.FC<NumberFieldProps> = ({
  value: defValue,
  min = 0,
  max = 0,
  step = 1,
  ...props
}) => {
  const inputRef = useRef<any>({}).current;
  const [value, setValue] = React.useState<number>(
    parseInt(defValue as any, 10)
  );

  const increase = useCallback(() => {
    let newValue: number = value + step;
    if (newValue > max) {
      newValue = max;
    }
    setValue(newValue);
  }, [max, value, step]);

  const decrease = useCallback(() => {
    let newValue: number = value - step;
    if (newValue < min) {
      newValue = min;
    }
    setValue(newValue);
  }, [min, value, step]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { value } = e?.target;
      const valueToCheck = parseInt(value, 10);
      // Validate if the value is a number so I can set the state
      if (!isNaN(valueToCheck)) {
        if (valueToCheck < max) {
          setValue(valueToCheck);
        } else if (valueToCheck < min) {
          setValue(min);
        } else {
          setValue(max);
        }
      } else {
        setValue(min);
      }
    },
    [min, max]
  );

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (inputRef?.current) {
        inputRef?.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel, inputRef]);

  return (
    <TextField
      ref={(ref) => {
        inputRef.current = ref;
      }}
      {...props}
      prepend={
        <IconButton icon="minus" disabled={value === min} onClick={decrease} />
      }
      type="number"
      onChange={handleChangeValue}
      append={
        <IconButton icon="add" disabled={value === max} onClick={increase} />
      }
      value={value.toString()}
    />
  );
};

NumberField.defaultProps = {
  max: 1000,
  min: 0,
  step: 1,
};

export default React.memo(NumberField);
