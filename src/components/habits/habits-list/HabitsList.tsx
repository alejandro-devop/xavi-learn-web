import Dialog from "core/components/dialogs/dialog/Dialog";
import Table from "core/components/table";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import { HabitSchemaType } from "types/schemas/habit";
import HabitCreate from "../habit-create";

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
      <Table
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
      />
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
