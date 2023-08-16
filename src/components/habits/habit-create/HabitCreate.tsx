import { HabitFormType } from "types/forms/habit.types";
import HabitForm from "../habit-form/HabitForm";
import { usePost } from "core/contexts/api-context/hooks";

interface HabitCreateProps {
  onCancel?: () => void;
  onSaved?: () => void;
}

const HabitCreate: React.FC<HabitCreateProps> = ({ onSaved, onCancel }) => {
  const [sendRequest, loading] = usePost<HabitFormType>("habits.save", {});
  const handleSubmit = async (form: HabitFormType) => {
    try {
      const { status, ...data } = await sendRequest(form);
      if (status) {
        onSaved?.();
      } else {
        alert("Error!");
        console.error(data);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <HabitForm onSubmit={handleSubmit} onCancel={onCancel} loading={loading} />
  );
};

export default HabitCreate;
