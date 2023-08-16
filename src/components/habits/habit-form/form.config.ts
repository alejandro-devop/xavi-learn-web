import { UseFormHookConfigType } from "core/hooks/use-form/types";
import { HabitFormType } from "types/forms/habit.types";

export default {
  required: ["name", "category", "start_date", "end_date"],
  defaultValues: {},
  fields: {
    name: {
      label: "Name",
      placeholder: "Enter a name",
      rules: "min:4",
    },
    description: {
      label: "Description",
      placeholder: "(Optional) Enter a description for the habit",
    },
    category: {
      label: "Category",
      placeholder: "Which aspect in your life does this habit affect?",
    },
    start_date: {
      label: "Start Date",
      placeholder: "Enter a start date",
    },
    end_date: {
      label: "End Date",
      placeholder: "Enter an end date",
    },
    measure: {
      label: "Measure",
    },
    activity: {
      label: "Activity",
    },
    should_keep: {
      label: "Keep",
      default: true,
    },
    should_avoid: {
      label: "Avoid",
      default: false,
    },
    is_counter: {
      label: "Counter",
    },
    is_timer: {
      label: "Timer",
    },
    days: {
      label: "Days",
    },
    daily_goal: {
      label: "Daily Goal",
    },
    timer_goal: {
      label: "How much time to complete? (mins)",
    },
    times_goal: {
      label: "How many times to complete?",
    },
  },
} as UseFormHookConfigType<HabitFormType>;
