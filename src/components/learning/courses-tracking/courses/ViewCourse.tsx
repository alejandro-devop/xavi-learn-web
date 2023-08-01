import { useState } from "react";
import { useGet } from "contexts/api-context/hooks";
import { CourseFollowUpSchema, CourseSchema } from "types/schemas/courses";
import FollowUpItem from "./FollowUpItem";
import { Button } from "components/buttons";
import { useRouting } from "hooks";
import DetailTable from "components/detail-table/DetailTable";
import MDEditor from "@uiw/react-md-editor";

interface ViewCourseProps {
  courseId: string;
}
const ViewCourse: React.FC<ViewCourseProps> = ({ courseId }) => {
  const { goTo } = useRouting();
  const [selectedItem, setSelectedItem] = useState<CourseFollowUpSchema>();

  const [data, loading] = useGet<CourseSchema>("courses.view", {
    replacements: {
      id: courseId,
    },
  });

  const handleView = (item: CourseFollowUpSchema) => {
    setSelectedItem(item);
  };

  if (loading || !data) {
    return null;
  }
  return (
    <div className="flex">
      <div className="flex-1">
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
        {data?.follow_ups &&
          data?.follow_ups.map((item) => (
            <FollowUpItem key={item.id} item={item} onView={handleView} />
          ))}
      </div>
      <div className="flex-1 p-2">
        {selectedItem && <MDEditor.Markdown source={selectedItem.content} />}
      </div>
    </div>
  );
};

export default ViewCourse;
