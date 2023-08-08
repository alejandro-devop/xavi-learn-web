import { usePut } from "core/contexts/api-context/hooks";
import CategoryForm from "../category-form/CategoryForm";
import { ActivityCategoryFormType } from "types/forms/activity-category.types";
import ErrorRenderer from "core/components/form/error-renderer/ErrorRenderer";

interface UpdateCategoryProps {
  item: any;
  onUpdated?: () => void;
}

type ActivityCategoryResponseType = {
  name: string;
  color: string;
  description: string;
  icon: string;
  is_rest?: boolean;
  is_work?: boolean;
  is_learning?: boolean;
  is_self_care?: boolean;
  is_exercise?: boolean;
  is_driving?: boolean;
  is_entertainment?: boolean;
  is_feeding?: boolean;
  is_idle?: boolean;
  is_loving?: boolean;
  is_planning?: boolean;
  is_playing?: boolean;
  id: string;
  updated_at: string;
  created_at: string;
};

const UpdateCategory: React.FC<UpdateCategoryProps> = ({ item, onUpdated }) => {
  const [sendRequest, loading, { errors }] = usePut<
    ActivityCategoryFormType,
    ActivityCategoryResponseType
  >("activity.categories.update", {
    replacements: {
      id: item.id,
    },
  });
  const handleSave = async (form: ActivityCategoryFormType) => {
    try {
      const { status } = await sendRequest(form);
      if (status) {
        alert("Category Updated");
        onUpdated?.();
      } else {
        alert("Error while saving the category");
      }
    } catch (err) {
      console.log("Error");
    }
  };
  return (
    <>
      <h2>Edit</h2>
      {errors && <ErrorRenderer errors={errors} />}
      <CategoryForm
        isEditing
        item={item}
        onSubmit={handleSave}
        loading={loading}
      />
    </>
  );
};

export default UpdateCategory;
