import Form, {
  Fieldset,
  IconField,
  TextAreaField,
  TextField,
} from "core/components/form";
import { useForm } from "core/hooks";
import config from "./form.config";
import { Button } from "core/components/buttons";
import { HabitCategoryFormType } from "types/forms/habit.types";
import { useCallback } from "react";

interface HabitCategoryFormProps {
  loading?: boolean;
  onCancel?: () => void;
  onSubmit?: (form: HabitCategoryFormType) => void;
}

const HabitCategoryForm: React.FC<HabitCategoryFormProps> = ({
  loading,
  onSubmit,
  onCancel,
}) => {
  const [fields, form, { isValidForm }] = useForm(config);
  const handleSubmit = useCallback(() => {
    onSubmit?.(form);
  }, [form, onSubmit]);

  return (
    <Form>
      <TextField {...fields.name} />
      <IconField {...fields.icon} />
      <TextAreaField {...fields.description} />
      <hr className="mt-10 mb-4" />
      <Fieldset className="flex justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!isValidForm || loading}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </Fieldset>
    </Form>
  );
};

export default HabitCategoryForm;
