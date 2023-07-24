import { useRouting } from "hooks";
import AddFollowUp from "./AddFollowUp";

const CoursesFollowup: React.FC = () => {
  const { redirectTo } = useRouting();

  const handleSaved = (courseId?: string) => {
    if (courseId) {
      redirectTo("coursesView", {
        params: {
          courseId: courseId,
        },
      });
    }
  };

  return <AddFollowUp onSaved={handleSaved} />;
};

export default CoursesFollowup;
