import { InputBaseProps } from "core/components/form/input-base/types";
import { ChangeEvent } from "react";

/**
 * Returned values from the hook
 */
export type UseFormHookReturnType<FT extends object = {}> = [
  Partial<Record<keyof FT, InputBaseProps | any>>,
  FT,
  {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isValidForm?: boolean;
  }
];

/**
 * Type to define rules for the fields
 */
export type RuleType =
  | {
      email?: boolean | {};
      required?: boolean | {};
      min?: number | {};
      max?: number | {};
      match?: string | {};
    }
  | string;

/**
 * Type to define the configuration of the fields
 */
export type FieldConfigType = {
  label?: string;
  placeholder?: string;
  rules?: RuleType;
  processor?: any;
  default?: string | number | boolean;
};

/**
 * Type to define the configuration of the hook
 */
export type UseFormHookConfigType<FT> = {
  defaultValues?: FT;
  rules?: Partial<Record<keyof FT, RuleType>>;
  fields?: Partial<Record<keyof FT, FieldConfigType>>;
  required?: Array<keyof FT>;
};
