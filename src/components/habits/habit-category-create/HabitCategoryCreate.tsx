import Dialog from "core/components/dialogs/dialog";
import HabitCategoryForm from "../habit-category-form/HabitCategoryForm";
import { HabitCategoryFormType } from "types/forms/habit.types";
import { usePost } from "core/contexts/api-context/hooks";

interface HabitCategoryCreateProps {
  open?: boolean;
  useDialog?: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  onSaved?: () => void;
}

const HabitCategoryCreate: React.FC<HabitCategoryCreateProps> = ({
  open,
  onClose,
  onCancel,
  onSaved,
  useDialog,
}) => {
  const [sendRequest, loading] = usePost("habits.categories.save");
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
      title="Create habit category"
      disableFooter
    >
      {content}
    </Dialog>
  ) : (
    content
  );
};

export default HabitCategoryCreate;
