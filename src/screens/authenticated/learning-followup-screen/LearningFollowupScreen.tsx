import CoursesFollowup from "components/learning/courses-tracking/courses-followup";
import { InsidesLayout } from "layouts";
import { useParams } from "react-router-dom";

const LearningFollowUpScreen: ScreenType = () => {
  const { courseId } = useParams();
  return (
    <InsidesLayout
      title="Followup"
      subtitle="Course"
      crumbs={[
        { label: "Home", path: "dashboard" },
        { label: "Learning", path: "learning" },
        { label: "Courses", path: "coursesList" },
        { label: "View", path: "coursesView", params: { courseId } },
        { label: "Follow up" },
      ]}
    >
      <CoursesFollowup />
    </InsidesLayout>
  );
};

export default LearningFollowUpScreen;
