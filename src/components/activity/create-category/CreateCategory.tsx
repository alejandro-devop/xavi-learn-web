import { usePost } from "core/contexts/api-context/hooks";
import CategoryForm from "../category-form/CategoryForm";
import { ActivityCategoryFormType } from "types/forms/activity-category.types";
import ErrorRenderer from "core/components/form/error-renderer/ErrorRenderer";

interface CreateCategoryProps {
  onSaved?: () => void;
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

const CreateCategory: React.FC<CreateCategoryProps> = ({ onSaved }) => {
  const [sendRequest, loading, { errors }] = usePost<
    ActivityCategoryFormType,
    ActivityCategoryResponseType
  >("activity.categories.save");
  const handleSave = async (form: ActivityCategoryFormType) => {
    try {
      const { status } = await sendRequest(form);
      if (status) {
        onSaved?.();
      } else {
        alert("Error while saving the category");
      }
    } catch {}
  };
  return (
    <>
      <hr />
      <h2>Create category</h2>
      {errors && <ErrorRenderer errors={errors} />}
      <CategoryForm loading={loading} onSubmit={handleSave} />
      <hr />
    </>
  );
};

export default CreateCategory;
