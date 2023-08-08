import { UseFormHookConfigType } from "core/hooks/use-form/types";
import { LoginFormType } from "types/forms/auth.types";

export default {
  required: ["email", "password"],
  defaultValues: {
    email: "",
    password: "",
  },
  fields: {
    email: {
      label: "E-mail",
      placeholder: "Enter your e-mail address",
      rules: "email",
    },
    password: {
      label: "Password",
      placeholder: "Enter a password",
    },
  },
} as UseFormHookConfigType<LoginFormType>;
