import { useGet } from "contexts/api-context/hooks";
import { CourseSchema } from "types/schemas/courses";
import FollowUpItem from "./FollowUpItem";
import { Button } from "components/buttons";
import { useRouting } from "hooks";
import DetailTable from "components/detail-table/DetailTable";

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
      <div className="w-1/2">
        <DetailTable
          data={[
            { label: "Title", value: data.title },
            { label: "Description", value: data.description },
            { label: "Url", value: data.url },
            { label: "Lessons", value: data.lessons },
            { label: "Progress", value: data.completed_lessons },
            { label: "Percentage", value: data.percentage },
          ]}
        />
        <div className="flex justify-end">
          <Button
            variant="primary"
            icon="add"
            onClick={() =>
              goTo("learningFollowUp", { params: { courseId: courseId } })
            }
          >
            Add followup
          </Button>
        </div>
      </div>
      {data?.follow_ups &&
        data?.follow_ups.map((item) => (
          <FollowUpItem key={item.id} item={item} />
        ))}
    </>
  );
};

export default ViewCourse;
