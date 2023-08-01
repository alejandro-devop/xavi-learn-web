import ViewCourse from "components/learning/courses-tracking/courses/ViewCourse";
import { InsidesLayout } from "layouts";
import { useParams } from "react-router-dom";

const ViewCourseScreen: ScreenType = () => {
  const { courseId } = useParams();
  return (
    <InsidesLayout
      crumbs={[
        { label: "Home", path: "dashboard" },
        { label: "Learning", path: "learning" },
        { label: "Courses", path: "coursesList" },
        { label: "View" },
      ]}
      title="View"
      subtitle="View"
    >
      <ViewCourse courseId={courseId || ""} />
    </InsidesLayout>
  );
};

export default ViewCourseScreen;
