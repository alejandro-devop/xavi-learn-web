import { UseFormHookConfigType } from "hooks/use-form/types";
import { RegisterFormType } from "types/forms/auth.types";

export default {
  required: ["email", "name", "password", "confirmPassword"],
  defaultValues: {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  },
  fields: {
    email: {
      label: "E-mail",
      placeholder: "Enter your e-mail address",
      rules: "email",
    },
    name: {
      label: "Fullname",
      placeholder: "Enter your full name",
      rules: "min:3",
    },
    password: {
      label: "Password",
      placeholder: "Enter a password",
      rules: "min:8",
    },
    confirmPassword: {
      label: "Confirm Password",
      placeholder: "Confirm your password",
      rules: "match:password",
    },
  },
} as UseFormHookConfigType<RegisterFormType>;
