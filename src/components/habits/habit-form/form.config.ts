import { UseFormHookConfigType } from "core/hooks/use-form/types";
import { HabitForm } from "types/forms/habit.types";

export default {
  required: ["name", "description", "start_date", "end_date"],
  defaultValues: {},
  fields: {
    name: {
      label: "Name",
      placeholder: "Enter a name",
    },
    description: {
      label: "Description",
      placeholder: "Enter a description",
    },
    start_date: {
      label: "Start Date",
      placeholder: "Enter a start date",
    },
    end_date: {
      label: "End Date",
      placeholder: "Enter an end date",
    },
    category: {
      label: "Category",
    },
    measure: {
      label: "Measure",
    },
    activity: {
      label: "Activity",
    },
    should_keep: {
      label: "Keep",
    },
    should_avoid: {
      label: "Avoid",
    },
    is_counter: {
      label: "Counter",
    },
    is_timer: {
      label: "Timer",
    },
    is_incremental: {
      label: "Incremental",
    },
    is_decremental: {
      label: "Decremental",
    },
    days: {
      label: "Days",
    },
    streak: {
      label: "Streak",
    },
    max_streak: {
      label: "Max Streak",
    },
    daily_goal: {
      label: "Daily Goal",
    },
    timer_goal: {
      label: "Timer Goal",
    },
    times_goal: {
      label: "Times Goal",
    },
  },
} as UseFormHookConfigType<HabitForm>;
