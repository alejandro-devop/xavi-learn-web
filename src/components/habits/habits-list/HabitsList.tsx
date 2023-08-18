import Dialog from "core/components/dialogs/dialog/Dialog";
import Table from "core/components/table";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import { HabitSchemaType } from "types/schemas/habit";
import HabitCreate from "../habit-create";
import Tabs, { Tab } from "core/components/tabs";
import HabitCard from "./HabitCard";
import HabitCategoriesList from "../habit-categories-list";
import { Button } from "core/components/buttons";
import classNames from "classnames";

const HabitsList: React.FC = () => {
  const [data, , { refetch }] = useGet<HabitSchemaType[]>("habits.list");
  const [opened, setOpened] = useState<boolean>(false);
  const toggleAdd = () => setOpened(!opened);

  const handleOnSaved = () => {
    refetch();
    toggleAdd();
  };
  return (
    <>
      <Tabs initialTab={0}>
        <Tab title="habits">
          <div
            className={classNames(
              "flex flex-1 py-2 px-1 rounded-sm justify-end"
            )}
          >
            <Button rounded variant="primary" icon="add" onClick={toggleAdd}>
              Add habit
            </Button>
          </div>
          {data?.map((item, key) => (
            <HabitCard key={`habit-${key}-${item.id}`} habit={item} />
          ))}
        </Tab>
        <Tab title="categories">
          <HabitCategoriesList />
        </Tab>
      </Tabs>
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
