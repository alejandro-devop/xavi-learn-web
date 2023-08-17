import Dialog from "core/components/dialogs/dialog/Dialog";
import Table from "core/components/table";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import { HabitSchemaType } from "types/schemas/habit";
import HabitCreate from "../habit-create";
import Tabs, { Tab } from "core/components/tabs";
import HabitCard from "./HabitCard";
import HabitCategoriesList from "../habit-categories-list";

const HabitsList: React.FC = () => {
  const [data, loading, { refetch }] = useGet<HabitSchemaType[]>("habits.list");
  const [opened, setOpened] = useState<boolean>(false);
  const toggleAdd = () => setOpened(!opened);
  const columns = {
    name: "Name",
    description: "Description",
    start_date: "Start date",
    end_date: "End date",
    should_avoid: "Should avoid",
    should_keep: "Should keep",
  };
  const handleAction = (action: string) => {
    if (action === "add") {
      toggleAdd();
    }
  };
  const handleOnSaved = () => {
    refetch();
    toggleAdd();
  };
  return (
    <>
      <Tabs initialTab={2}>
        <Tab title="My day">My day</Tab>
        <Tab title="habits">
          {data?.map((item, key) => (
            <HabitCard key={`habit-${key}-${item.id}`} habit={item} />
          ))}
        </Tab>
        <Tab title="categories">
          <HabitCategoriesList />
        </Tab>
      </Tabs>
      {/* <Table
        colLabels={columns}
        columns={Object.keys(columns)}
        data={data}
        loading={loading}
        onTableActionCalled={handleAction}
        tableActions={[
          {
            action: "add",
            label: "New ",
            icon: "add",
            buttonProps: {
              variant: "primary",
              rounded: true,
            },
          },
        ]}
      /> */}
      {opened && (
        <Dialog
          open={opened}
          disableFooter
          title="Add Habit"
          size="sm"
          onClose={toggleAdd}
        >
          <HabitCreate onSaved={handleOnSaved} onCancel={toggleAdd} />
        </Dialog>
      )}
    </>
  );
};

export default HabitsList;
