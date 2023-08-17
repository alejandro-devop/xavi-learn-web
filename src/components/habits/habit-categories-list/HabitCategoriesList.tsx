import Table from "core/components/table";
import { useDelete, useGet } from "core/contexts/api-context/hooks";
import { useCallback, useState } from "react";
import { HabitCategorySchemaType } from "types/schemas/habit";
import HabitCategoryCreate from "../habit-category-create/HabitCategoryCreate";
import HabitCategoryEdit from "../habit-category-edit";
import Dialog from "core/components/dialogs/dialog";

const HabitCategoriesList: React.FC = () => {
  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [selectedToEdit, setSelectedToEdit] =
    useState<HabitCategorySchemaType | null>();
  const [selectedToRemove, setSelectedToRemove] =
    useState<HabitCategorySchemaType | null>();

  const [categories, , { refetch }] = useGet<HabitCategorySchemaType[]>(
    "habits.categories.list"
  );

  const [sendRemove, removing] = useDelete("habits.categories.delete");

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

  const handleRowAction = (
    action: string,
    selectedRecord: HabitCategorySchemaType
  ) => {
    if (action === "edit") {
      setSelectedToEdit(selectedRecord);
    } else if (action === "remove") {
      setSelectedToRemove(selectedRecord);
    }
  };

  const handleRemove = useCallback(async () => {
    try {
      const response = await sendRemove({
        replacements: {
          id: selectedToRemove?.id,
        },
      });
      if (response.status) {
        setSelectedToRemove(null);
        refetch();
      }
    } catch (err) {
      console.error(err);
    }
  }, [sendRemove, refetch, selectedToRemove]);

  const handleSaved = () => {
    toggleAdd();
    refetch();
  };

  const handleUpdated = () => {
    setSelectedToEdit(null);
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
        onActionCalled={handleRowAction}
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
      {selectedToEdit && (
        <HabitCategoryEdit
          useDialog
          open
          category={selectedToEdit}
          onSaved={handleUpdated}
          onClose={() => setSelectedToEdit(null)}
        />
      )}
      {selectedToRemove && (
        <Dialog
          title="Do you really want to remove this record?"
          disableAccept={removing}
          open
          onClose={() => setSelectedToRemove(null)}
          onAccept={handleRemove}
          labels={{ accept: "Remove" }}
          size="xs"
        >
          <p className="text-center">
            If there are habits related to this category it cannot be deleted.
          </p>
        </Dialog>
      )}
    </>
  );
};

export default HabitCategoriesList;
