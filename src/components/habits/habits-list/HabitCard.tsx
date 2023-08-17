import { HabitSchemaType } from "types/schemas/habit";
import styles from "./habit-card.module.scss";

interface HabitCardProps {
  habit: HabitSchemaType;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <div className={styles.habitCard}>
      <div>{habit.name}</div>
    </div>
  );
};

export default HabitCard;
