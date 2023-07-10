import { ChangeEvent, useState, useMemo, useCallback, useRef } from "react";
import {
  FieldConfigType,
  HookConfigType,
  UseFormHookReturnType,
} from "./types";
import { InputBaseProps } from "components/form/input-base/types";
import { Validator } from "./class";

/**
 * Hook to manage forms
 * @param config
 * @returns
 */
const useForm = <FT extends Object = {}>(
  config?: HookConfigType<FT>
): UseFormHookReturnType<FT> => {
  const { defaultValues, fields, required } = config || { defaultValues: {} };
  const [form, setForm] = useState<FT>(defaultValues as FT);
  const validator = useRef(
    new Validator(fields as any, {
      required: required as string[],
    })
  ).current;

  /**
   * Handles the change of the form fields
   */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form]
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
      if (rules) {
        error = validator.validate({
          field: inputId as string,
          value: (form || {})[inputId],
          form,
        });
      }
      config[inputId] = {
        id: inputId as string,
        name: inputId as string,
        label: inputConfig?.label || (inputId as string),
        placeholder: inputConfig?.placeholder,
        value: (form ? form[inputId] : "") as any,
        onChange: handleChange,
        error,
      };
      hasError = !!!error;
    });
    return [config, hasError];
  }, [form, fields, handleChange, validator]);

  delete (formData as any).isValidForm;

  return [formData, form, { onChange: handleChange, isValidForm }];
};

export default useForm;
