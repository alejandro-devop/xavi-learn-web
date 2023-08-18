import Dialog from "core/components/dialogs/dialog/Dialog";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import { HabitFollowUpSchemaType, HabitSchemaType } from "types/schemas/habit";
import HabitCreate from "../habit-create";
import Tabs, { Tab } from "core/components/tabs";
import HabitCard from "./HabitCard";
import HabitCategoriesList from "../habit-categories-list";
import { Button } from "core/components/buttons";
import classNames from "classnames";
import AddFollowUp from "../add-follow-up";

type AddFollowUpInfoType = {
  date: string;
  followUp?: HabitFollowUpSchemaType;
  habit?: HabitSchemaType;
};

const HabitsList: React.FC = () => {
  const [data, , { refetch }] = useGet<HabitSchemaType[]>("habits.list");
  const [opened, setOpened] = useState<boolean>(false);
  const [followUpInfo, setFollowUpInfo] = useState<AddFollowUpInfoType | null>(
    null
  );
  const toggleAdd = () => setOpened(!opened);

  const handleOnSaved = () => {
    refetch();
    toggleAdd();
  };

  const handleAddFollowUp = (info: AddFollowUpInfoType) => {
    setFollowUpInfo(info);
  };

  const handleOnSavedFollowUp = () => {
    setFollowUpInfo(null);
    refetch();
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
            <HabitCard
              key={`habit-${key}-${item.id}`}
              habit={item}
              addFollowUp={handleAddFollowUp}
            />
          ))}
        </Tab>
        <Tab title="categories">
          <HabitCategoriesList />
        </Tab>
      </Tabs>
      {Boolean(followUpInfo) && (
        <AddFollowUp
          open
          onClose={() => setFollowUpInfo(null)}
          habit={followUpInfo?.habit}
          date={followUpInfo?.date}
          followUp={followUpInfo?.followUp}
          onSaved={handleOnSavedFollowUp}
        />
      )}
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
