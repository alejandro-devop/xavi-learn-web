import HabitsList from "components/habits/habits-list/HabitsList";
import { InsidesLayout } from "layouts";

const ListHabitsScreen: ScreenType = () => {
  return (
    <InsidesLayout title="My habits" subtitle="Manage">
      <HabitsList />
    </InsidesLayout>
  );
};

export default ListHabitsScreen;
