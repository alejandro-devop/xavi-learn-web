import { useRouting } from "hooks";
import AddFollowUp from "./AddFollowUp";
import { useParams } from "react-router-dom";

const CoursesFollowup: React.FC = () => {
  const { redirectTo } = useRouting();
  const { courseId: currentCourse } = useParams();

  const handleSaved = (courseId?: string) => {
    if (courseId) {
      redirectTo("coursesView", {
        params: {
          courseId: courseId,
        },
      });
    }
  };

  const handleCancel = () => {
    redirectTo("coursesView", {
      params: {
        courseId: currentCourse || "",
      },
    });
  };

  return <AddFollowUp onSaved={handleSaved} onCancel={handleCancel} />;
};

export default CoursesFollowup;
