import Dialog from "core/components/dialogs/dialog/Dialog";
import Table from "core/components/table";
import { useGet } from "core/contexts/api-context/hooks";
import { HabitSchemaType } from "types/schemas/habit";

const HabitsList: React.FC = () => {
  const [data, loading] = useGet<HabitSchemaType[]>("habits.list");
  const columns = {
    name: "Name",
    description: "Description",
    start_date: "Start date",
    end_date: "End date",
    should_avoid: "Should avoid",
    should_keep: "Should keep",
  };
  return (
    <>
      <Table
        colLabels={columns}
        columns={Object.keys(columns)}
        data={data}
        loading={loading}
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
    </>
  );
};

export default HabitsList;
