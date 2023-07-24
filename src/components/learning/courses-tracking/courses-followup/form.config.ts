import { UseFormHookConfigType } from "hooks/use-form/types";
import { CourseFollowUpSchema } from "types/schemas/courses";

export default {
  required: ["title", "content", "course_id"],
  fields: {
    course_id: {
      label: "Course",
    },
    title: {
      label: "Title",
    },
    url: {
      label: "URL",
    },
    content: {
      label: "Content",
    },
  },
} as UseFormHookConfigType<CourseFollowUpSchema>;
