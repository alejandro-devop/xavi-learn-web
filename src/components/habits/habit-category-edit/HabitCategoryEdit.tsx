import { usePut } from "core/contexts/api-context/hooks";
import HabitCategoryForm from "../habit-category-form";
import { HabitCategoryFormType } from "types/forms/habit.types";
import { HabitCategorySchemaType } from "types/schemas/habit";
import Dialog from "core/components/dialogs/dialog";

interface HabitCategoryEditProps {
  open?: boolean;
  useDialog?: boolean;
  onSaved?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  category: HabitCategorySchemaType;
}

const HabitCategoryEdit: React.FC<HabitCategoryEditProps> = ({
  onSaved,
  onCancel,
  onClose,
  category,
  useDialog,
  open,
}) => {
  const [sendRequest, loading] = usePut("habits.categories.update", {
    replacements: {
      id: category.id,
    },
  });

  const handleSubmit = async (form: HabitCategoryFormType) => {
    try {
      const response = await sendRequest(form);
      if (response.status) {
        onSaved?.();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const content = (
    <HabitCategoryForm
      isUpdate
      defaultValues={category}
      loading={loading}
      onSubmit={handleSubmit}
      onCancel={() => (onCancel ? onCancel?.() : onClose?.())}
    />
  );

  return useDialog ? (
    <Dialog
      size="sm"
      open={open}
      onClose={onClose}
      title={`Edit ${category.name}`}
      disableFooter
    >
      {content}
    </Dialog>
  ) : (
    content
  );
};

export default HabitCategoryEdit;
