import { CourseFollowUpSchema } from "types/schemas/courses";
import moment from "moment";
import styles from "./followup-item.module.scss";
import { useMemo } from "react";
import IconButton from "core/components/buttons/icon-button";
interface FollowUpItemProps {
  item: CourseFollowUpSchema;
  onView?: (item: CourseFollowUpSchema) => void;
}

const FollowUpItem: React.FC<FollowUpItemProps> = ({ item, onView }) => {
  const date = useMemo(() => {
    return moment(item.created_at).format("YYYY-MM-DD");
  }, [item.created_at]);
  return (
    <div className={styles.followUpItem}>
      <div className={styles.followUpCarret}></div>
      <div className={styles.followUpWrapper}>
        <div className={styles.content}>
          <p>{item.title}</p>
        </div>
        <IconButton icon="eye" onClick={() => onView?.(item)} />
        <IconButton icon="edit" />
        <IconButton icon="trash" />
        {/* <MDEditor.Markdown source={item.content} /> */}
        <div className={styles.dateWrapper}>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default FollowUpItem;
