import { Button } from "core/components/buttons";
import { useGet } from "core/contexts/api-context/hooks";
import { useState } from "react";
import CreateCategory from "../create-category/CreateCategory";
import UpdateCategory from "../update-category/UpdateCategory";
import CategoryItem from "./CategoryItem";

type AcitivityCategoryType = {
  id: string;
  order_index: number;
  name: string;
  color: string;
  description: string;
  icon: string;
  is_rest: boolean;
  is_work: boolean;
  is_learning: boolean;
  is_self_care: boolean;
  is_exercise: boolean;
  is_driving: boolean;
  is_entertainment: boolean;
  is_feeding: boolean;
  is_idle: boolean;
  is_loving: boolean;
  is_planning: boolean;
  is_playing: boolean;
  created_at: string;
  updated_at: string;
};

const ActivityCategoriesList: React.FC<{}> = () => {
  const [data, loading, { refetch }] = useGet<AcitivityCategoryType[]>(
    "activity.categories.list"
  );
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [selectedToEdit, setSelectdToEdit] = useState<any>(null);
  const toggleCreate = () => setOpenCreate(!openCreate);

  const onSaved = () => {
    refetch();
    toggleCreate();
  };
  const onUpdated = () => {
    refetch();
    setSelectdToEdit(null);
  };

  const onRemoved = () => {
    refetch();
  };

  return (
    <>
      <h2>Activity categories</h2>
      <Button onClick={toggleCreate}>
        {openCreate ? "Cancel" : "Add new"}
      </Button>
      {Boolean(selectedToEdit) && (
        <UpdateCategory item={selectedToEdit} onUpdated={onUpdated} />
      )}
      {openCreate && <CreateCategory onSaved={onSaved} />}
      {loading && <p>Loading...</p>}
      <ul>
        {data &&
          data.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onEdit={() => setSelectdToEdit(item)}
              onRemoved={onRemoved}
            />
          ))}
      </ul>
    </>
  );
};

export default ActivityCategoriesList;
