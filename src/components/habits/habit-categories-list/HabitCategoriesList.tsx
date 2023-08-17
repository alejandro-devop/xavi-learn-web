import Table from "core/components/table";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import { HabitCategorySchemaType } from "types/schemas/habit";
import HabitCategoryCreate from "../habit-category-create/HabitCategoryCreate";

const HabitCategoriesList: React.FC = () => {
  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [categories, , { refetch }] = useGet<HabitCategorySchemaType[]>(
    "habits.categories.list"
  );
  const columns = {
    name: "Name",
    description: "Description",
    icon: "Icon",
  };

  const toggleAdd = () => setVisibleAdd(!visibleAdd);

  const handleTableAction = (action: string) => {
    if (action === "add") {
      toggleAdd();
    }
  };

  const handleSaved = () => {
    toggleAdd();
    refetch();
  };

  return (
    <>
      <Table
        tableActions={[
          {
            action: "add",
            label: "New ",
            icon: "add",
            buttonProps: { variant: "primary", rounded: true },
          },
        ]}
        onTableActionCalled={handleTableAction}
        colLabels={columns}
        columns={Object.keys(columns)}
        data={categories}
        actions={[
          { icon: "edit", action: "edit" },
          { icon: "trash", action: "remove" },
        ]}
      />
      {visibleAdd && (
        <HabitCategoryCreate
          open
          useDialog
          onClose={toggleAdd}
          onSaved={handleSaved}
        />
      )}
    </>
  );
};

export default HabitCategoriesList;
