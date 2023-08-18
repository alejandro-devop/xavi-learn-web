import Dialog from "core/components/dialogs/dialog";
import { HabitFollowUpSchemaType, HabitSchemaType } from "types/schemas/habit";
import AddFollowUpForm from "../add-follow-up-form";
import moment from "moment";
import { HabitFollowUpFormType } from "types/forms/habit.types";
import { usePost, usePut } from "core/contexts/api-context/hooks";

interface AddFollowUpProps {
  open?: boolean;
  onClose?: () => void;
  date?: string;
  habit?: HabitSchemaType;
  followUp?: HabitFollowUpSchemaType;
  onSaved?: () => void;
}

const AddFollowUp: React.FC<AddFollowUpProps> = ({
  open,
  onClose,
  date,
  followUp,
  habit,
  onSaved,
}) => {
  const isEditing = Boolean(followUp);
  const [sendSave, saving] = usePost("habits.followUps.save");
  const [sendUpdate, updating] = usePut("habits.followUps.update", {
    replacements: {
      id: followUp?.id,
    },
  });
  //   const {} = habit || {};
  const handleSubmit = async (form: HabitFollowUpFormType) => {
    try {
      const response = isEditing
        ? await sendUpdate(form)
        : await sendSave(form);
      if (response.status) {
        onSaved?.();
      }
    } catch (error) {}
  };

  return (
    <Dialog
      size="xs"
      open={open}
      onClose={onClose}
      title={`Followup ${date || ""}`}
      disableFooter
    >
      <AddFollowUpForm
        isEditing={isEditing}
        currentFollowUp={followUp}
        habit={habit}
        date={date || moment().format("YYYY-MM-DD")}
        onSubmit={handleSubmit}
        loading={saving || updating}
        onCancel={onClose}
      />
    </Dialog>
  );
};

export default AddFollowUp;
