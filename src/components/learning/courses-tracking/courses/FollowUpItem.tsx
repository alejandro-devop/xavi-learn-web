import { CourseFollowUpSchema } from "types/schemas/courses";
import MDEditor from "@uiw/react-md-editor";

interface FollowUpItemProps {
  item: CourseFollowUpSchema;
}

const FollowUpItem: React.FC<FollowUpItemProps> = ({ item }) => {
  return (
    <div>
      <p>{item.title}</p>
      <MDEditor.Markdown source={item.content} />
      <hr />
    </div>
  );
};

export default FollowUpItem;
