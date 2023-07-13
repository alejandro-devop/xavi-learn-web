import { UseFormHookConfigType } from "hooks/use-form/types";
import { ActivityCategoryFormType } from "types/forms/activity-category.types";

export default {
  required: ["name", "color", "icon"],
  defaultValues: {
    color: "#FFFFFF",
    icon: "tag",
    is_idle: true,
  },
  fields: {
    name: {
      label: "Category name",
      placeholder: "Enter a name for the category",
      rules: "min:2",
    },
    color: { label: "Color" },
    icon: { label: "Icon" },
    description: {
      label: "Description",
      placeholder: "Enter a description for the category",
    },
    is_rest: {
      label: "Rest",
      processor: "switchGroup:type",
    },
    is_work: {
      label: "Work",
      processor: "switchGroup:type",
    },
    is_learning: {
      label: "Learning",
      processor: "switchGroup:type",
    },
    is_self_care: {
      label: "Self care",
      processor: "switchGroup:type",
    },
    is_exercise: {
      label: "Exercise",
      processor: "switchGroup:type",
    },
    is_driving: {
      label: "Driving",
      processor: "switchGroup:type",
    },
    is_entertainment: {
      label: "Entertainment",
      processor: "switchGroup:type",
    },
    is_feeding: {
      label: "Feeding",
      processor: "switchGroup:type",
    },
    is_idle: {
      label: "Idle",
      processor: "switchGroup:type",
      default: true,
    },
    is_loving: {
      label: "Loving",
      processor: "switchGroup:type",
    },
    is_planning: {
      label: "Planning",
      processor: "switchGroup:type",
      default: false,
    },
    is_playing: {
      label: "Playing",
      processor: "switchGroup:type",
      default: false,
    },
  },
} as UseFormHookConfigType<ActivityCategoryFormType>;
