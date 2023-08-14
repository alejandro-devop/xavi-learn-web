import HabitsList from "components/habits/habits-list/HabitsList";
import { InsidesLayout } from "layouts";

const ListHabitsScreen: ScreenType = () => {
  return (
    <InsidesLayout title="List habits">
      <HabitsList />
    </InsidesLayout>
  );
};

export default ListHabitsScreen;
