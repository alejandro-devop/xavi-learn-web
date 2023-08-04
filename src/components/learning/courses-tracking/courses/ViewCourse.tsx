import { useState } from "react";
import { useGet } from "contexts/api-context/hooks";
import { CourseFollowUpSchema, CourseSchema } from "types/schemas/courses";
import FollowUpItem from "./FollowUpItem";
import { Button } from "components/buttons";
import { useRouting } from "hooks";
import DetailTable from "components/detail-table/DetailTable";
import MDEditor from "@uiw/react-md-editor";
import styles from "./view-course.module.scss";
import { Label } from "components/form";
import moment from "moment";

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

  const renderFollowUps = () => {
    return (
      <>
        {data?.follow_ups &&
          data?.follow_ups.map((item) => (
            <FollowUpItem key={item.id} item={item} onView={handleView} />
          ))}
      </>
    );
  };

  const getFormattedDate = (date: string) => {
    return moment(date).format("YYYY-MM-DD");
  };

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
        {selectedItem && renderFollowUps()}
      </div>
      <div className="flex-1">
        {!selectedItem && renderFollowUps()}
        {selectedItem && (
          <div className={styles.markDownEditor}>
            <div>
              <Label>Notes: </Label>
            </div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.url}</p>
            <p>{getFormattedDate(selectedItem.created_at || "")}</p>
            <hr />
            <MDEditor.Markdown source={selectedItem.content} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCourse;
