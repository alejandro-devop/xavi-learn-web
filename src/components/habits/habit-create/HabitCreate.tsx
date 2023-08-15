import HabitForm from "../habit-form/HabitForm";

interface HabitCreateProps {
  onCancel?: () => void;
  onSaved?: () => void;
}

const HabitCreate: React.FC<HabitCreateProps> = ({ onSaved, onCancel }) => {
  return <HabitForm onSaved={onSaved} onCancel={onCancel} />;
};

export default HabitCreate;
