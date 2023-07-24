import { useGet } from "contexts/api-context/hooks";
import { CourseSchema } from "types/schemas/courses";
import FollowUpItem from "./FollowUpItem";
import { Button } from "components/buttons";
import { useRouting } from "hooks";

interface ViewCourseProps {
  courseId: string;
}
const ViewCourse: React.FC<ViewCourseProps> = ({ courseId }) => {
  const { goTo } = useRouting();
  const [data, loading] = useGet<CourseSchema>("courses.view", {
    replacements: {
      id: courseId,
    },
  });

  if (loading || !data) {
    return null;
  }
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.url}</p>
      <p>Lessons: {data.lessons}</p>
      <p>Completed: {data.completed_lessons}</p>
      <p>percentage: {data.percentage}</p>
      <hr />
      <h2>Follow ups</h2>
      <Button
        onClick={() =>
          goTo("learningFollowUp", { params: { courseId: courseId } })
        }
      >
        Add
      </Button>
      {data?.follow_ups &&
        data?.follow_ups.map((item) => (
          <FollowUpItem key={item.id} item={item} />
        ))}
    </>
  );
};

export default ViewCourse;
