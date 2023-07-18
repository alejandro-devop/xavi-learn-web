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
    },
    completed_lessons: {
      label: "Completed Lessons",
    },
    percentage: {
      label: "Percentage",
    },
  },
} as UseFormHookConfigType<CourseSchema>;
