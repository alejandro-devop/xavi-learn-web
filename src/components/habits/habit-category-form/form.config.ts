import { UseFormHookConfigType } from "core/hooks/use-form/types";
import { HabitCategoryFormType } from "types/forms/habit.types";

export default {
  required: ["name"],
  fields: {
    name: {
      label: "Name",
      placeholder: "Enter a name for the category",
    },
    description: {
      label: "Description",
      placeholder: "Enter a description for the category",
    },
    icon: {
      label: "Icon",
      placeholder: "Pick an icon",
    },
  },
} as UseFormHookConfigType<HabitCategoryFormType>;
