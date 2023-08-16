import React, {
  ChangeEventHandler,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { InputBaseProps } from "../input-base/types";
import TextField from "../text-field/TextField";
import IconButton from "core/components/buttons/icon-button";

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
  onChange,
  name,
  ...props
}) => {
  const inputRef = useRef<any>({}).current;
  const [value, setValue] = React.useState<number>(
    parseInt(defValue as any, 10)
  );

  const triggerChange = useCallback(
    (newValue: any) => {
      onChange?.({
        target: {
          name: name || "",
          value: newValue as any,
        },
      } as any);
    },
    [name, onChange]
  );

  const increase = useCallback(() => {
    let newValue: number = value + step;
    if (newValue > max) {
      newValue = max;
    }
    setValue(newValue);
    triggerChange(newValue);
  }, [max, value, step, triggerChange]);

  const decrease = useCallback(() => {
    let newValue: number = value - step;
    if (newValue < min) {
      newValue = min;
    }
    setValue(newValue);
    triggerChange(newValue);
  }, [min, value, step, triggerChange]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { value } = e?.target;
      const valueToCheck = parseInt(value, 10);
      let newValue = valueToCheck;
      // Validate if the value is a number so I can set the state
      if (!isNaN(valueToCheck)) {
        if (valueToCheck < max) {
          newValue = valueToCheck;
          // setValue(valueToCheck);
        } else if (valueToCheck < min) {
          // setValue(min);
          newValue = min;
        } else {
          // setValue(max);
          newValue = max;
        }
      } else {
        // setValue(min);
        newValue = min;
      }
      setValue(newValue);
      triggerChange(newValue);
    },
    [min, max, triggerChange]
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
      hideMax
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
