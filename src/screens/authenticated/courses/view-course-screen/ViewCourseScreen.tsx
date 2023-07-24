import ViewCourse from "components/learning/courses-tracking/courses/ViewCourse";
import { useParams } from "react-router-dom";

const ViewCourseScreen: ScreenType = () => {
  const { courseId } = useParams();
  return (
    <>
      <ViewCourse courseId={courseId || ""} />
    </>
  );
};

export default ViewCourseScreen;
