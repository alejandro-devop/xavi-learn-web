import { ChangeEvent, useState, useMemo, useCallback, useRef } from "react";
import {
  FieldConfigType,
  UseFormHookConfigType,
  UseFormHookReturnType,
} from "./types";
import { InputBaseProps } from "core/components/form/input-base/types";
import { Validator } from "./class";

/**
 * Hook to manage forms
 * @param config
 * @returns
 */
const useForm = <FT extends Object = {}>(
  config?: UseFormHookConfigType<FT>
): UseFormHookReturnType<FT> => {
  const { defaultValues, fields, required } = config || { defaultValues: {} };
  const [form, setForm] = useState<FT>(defaultValues as FT);
  const validator = useRef(
    new Validator(fields as any, {
      required: required as string[],
    })
  ).current;

  const processValue = useCallback(
    (processorConfig: {
      processor: string;
      form: any;
      field: string;
      currentValue: any;
    }) => {
      const { processor, currentValue, field, form } = processorConfig;
      const [processorName] = processor.split(":");

      if (processorName === "switchGroup") {
        const otherFields = Object.keys(fields || {}).filter((key) => {
          const fieldConfig = fields ? fields[key as keyof FT] : {};
          return fieldConfig?.processor?.includes("switchGroup");
        });
        const groupValue: any = otherFields.reduce(
          (accu, currentKey) => ({
            ...accu,
            [currentKey]: false,
          }),
          []
        );
        return { ...form, ...groupValue, [field]: currentValue === "on" };
      }
    },
    [fields]
  );

  /**
   * Handles the change of the form fields
   */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const config = fields ? fields[name as keyof FT] : {};
      if (config?.processor) {
        const newValue = processValue({
          processor: config?.processor,
          form,
          field: name,
          currentValue: value,
        });
        setForm(newValue);
      } else {
        setForm({
          ...form,
          [name]: value,
        });
      }
    },
    [form, fields, processValue]
  );

  /**
   * Output configuration for the form
   */
  type ConfigType = Partial<Record<keyof FT, InputBaseProps>>;
  type FieldKeyType = keyof FT;

  /**
   * Output form data buit from the configuration of the fields
   */
  const [formData, isValidForm]: [ConfigType, boolean] = useMemo(() => {
    const config: ConfigType = {};
    let hasError: boolean = false;
    Object.entries(fields || {}).forEach((item) => {
      const [inputId, inputConfig] = item as [FieldKeyType, FieldConfigType];
      const rules = inputConfig?.rules;
      let error: string | null = null;

      if (rules || required?.includes(inputId)) {
        error = validator.validate({
          field: inputId as string,
          value: (form || {})[inputId],
          form,
        });
      }
      const defaultValue: any =
        ((defaultValues || {}) as any)[inputId] || inputConfig?.default;
      config[inputId] = {
        id: inputId as string,
        name: inputId as string,
        label: inputConfig?.label || (inputId as string),
        placeholder: inputConfig?.placeholder,
        value: (form ? form[inputId] : defaultValue) as any,
        onChange: handleChange,
        error,
      };
      if (!hasError && Boolean(error)) {
        hasError = true;
      }
    });
    return [config, !hasError];
  }, [form, fields, handleChange, validator, defaultValues, required]);

  delete (formData as any).isValidForm;

  return [formData, form, { onChange: handleChange, isValidForm }];
};

export default useForm;
