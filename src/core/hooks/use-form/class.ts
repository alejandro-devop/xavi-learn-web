import _ from "lodash";
import { FieldConfigType } from "./types";

/**
 * Validator class
 * @param fields
 * @param otherConfig
 * @constructor
 * @example
 * const validator = new Validator(fields, { required: ["email"] });
 * const error = validator.validate({ field: "email", value: "test" });
 */
export class Validator {
  private fields: { [k: string]: FieldConfigType } = {};
  private required: string[];

  constructor(
    fields: { [k: string]: FieldConfigType },
    otherConfig?: { required?: string[] }
  ) {
    this.fields = fields;
    const { required } = otherConfig || {};
    this.required = required || [];
  }

  /**
   * Interprets a string of rules and validates the value
   * @param config
   * @returns
   */
  private validateASString = (config: {
    field: string;
    rules: string;
    value: any;
    form: any;
  }): string | null => {
    const { rules, value, form } = config;
    const rulesToValidate = rules.split("|");
    let error: string | null = "";
    for (const ruleItem of rulesToValidate) {
      const [rule, ...config] = ruleItem.split(":");
      switch (rule) {
        case "required": {
          error = this.validateRequired(value);
          break;
        }
        case "email": {
          error = this.validateEmail(value);
          break;
        }
        case "min": {
          const [min] = config;
          error = this.validateMin(value, parseInt(min, 10));
          break;
        }
        case "max": {
          const [max] = config;
          error = this.validateMax(value, parseInt(max, 10));
          break;
        }
        case "match": {
          const [fieldToMatch] = config;
          error = this.matchField(
            value,
            this.fields[fieldToMatch]?.label || fieldToMatch,
            form[fieldToMatch]
          );
        }
      }
      // If an error was found we stop the search
      if (!_.isEmpty(error)) {
        break;
      }
    }
    return error;
  };

  /**
   * Checks if the given value is empty
   * @param value
   * @returns
   */
  private validateRequired = (value: any): string | null => {
    return _.isEmpty(value) ? "Required" : null;
  };

  /**
   * Checks if the given value is a valid email
   * @param value
   * @returns
   */
  private validateEmail = (value: any): string | null => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (value as string).match(regExp) ? null : "Invalid email";
  };

  /**
   * Checks if the given value is greather or equals to the given min
   * @param value
   * @param min
   * @returns
   */
  private validateMin = (value: any, min: any): string | null => {
    return value.length >= min
      ? null
      : `Must be greather or equals to ${min} characters`;
  };

  /**
   * Checks if the given value is lower or equals to the given max
   * @param value
   * @param max
   * @returns
   */
  private validateMax = (value: any, max: any): string | null => {
    return value.length >= max
      ? null
      : `Must be lower or equals to ${max} characters`;
  };

  /**
   * Checks if the given value matches the given field
   * @param value
   * @param fieldToMatch
   * @param currentValue
   * @returns
   */
  private matchField = (
    value: any,
    fieldToMatch: string,
    currentValue: any
  ): string | null => {
    return value === currentValue ? null : `Must match ${fieldToMatch}`;
  };

  /**
   * Executes the validation of the given field
   * @param config
   * @returns
   */
  validate = (config: { field: string; value: any; form: any }) => {
    const { field, value, form } = config;
    const rules = this.fields[field]?.rules;

    if (this.required.includes(field) && _.isEmpty(value)) {
      const label = this.fields[field]?.label || field;
      return `"${label}" is required`;
    }

    if (typeof rules === "string") {
      return this.validateASString({ field, rules, value, form });
    } else if (typeof rules === "object") {
    }
    return null;
  };
}
