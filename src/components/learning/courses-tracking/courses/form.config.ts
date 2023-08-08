import { UseFormHookConfigType } from "hooks/use-form/types";
import { CourseSchema } from "types/schemas/courses";

export default {
  required: ["title"],
  fields: {
    title: {
      label: "Title",
    },
    description: {
      label: "Description",
    },
    url: {
      label: "URL",
    },
    lessons: {
      label: "Lessons",
      default: 0,
    },
    completed_lessons: {
      label: "Completed Lessons",
      default: 0,
    },
    // percentage: {
    //   label: "Percentage",
    //   default: 0,
    // },
  },
} as UseFormHookConfigType<CourseSchema>;
