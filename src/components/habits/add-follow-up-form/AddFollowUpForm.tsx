// import TextArea from "@uiw/react-md-editor/lib/components/TextArea";
import { Button } from "core/components/buttons";
import Form, {
  Fieldset,
  NumberField,
  TextAreaField,
} from "core/components/form";
import OptionsField from "core/components/form/options-field";
import { useForm } from "core/hooks";
import { useCallback, useMemo } from "react";
import { HabitFollowUpFormType } from "types/forms/habit.types";
import { HabitFollowUpSchemaType, HabitSchemaType } from "types/schemas/habit";

interface AddFollowUpFormProps {
  loading?: boolean;
  onCancel?: () => void;
  isEditing?: boolean;
  currentFollowUp?: HabitFollowUpSchemaType;
  habit?: HabitSchemaType;
  date: string;
  onSubmit?: (f: HabitFollowUpFormType) => void;
}

const AddFollowUpForm: React.FC<AddFollowUpFormProps> = ({
  habit,
  date,
  onSubmit,
  isEditing,
  currentFollowUp,
  loading,
  onCancel,
}) => {
  const { dailyGoal, needMeasure } = useMemo(() => {
    let dailyGoal = 0;
    const needMeasure = habit?.is_counter || habit?.is_timer;
    if (habit?.is_counter) {
      dailyGoal = habit?.times_goal;
    } else if (habit?.is_timer) {
      dailyGoal = habit?.timer_goal;
    }
    return {
      dailyGoal,
      needMeasure,
    };
  }, [habit]);

  const { measure } = habit || {};

  const [fields, form, { changeForm, isValidForm }] =
    useForm<HabitFollowUpFormType>({
      defaultValues: isEditing
        ? {
            habit: habit?.id,
            date: currentFollowUp?.date,
            daily_goal: currentFollowUp?.daily_goal,
            daily_counter: currentFollowUp?.daily_counter,
            story: currentFollowUp?.story,
            is_accomplished: currentFollowUp?.is_accomplished,
            is_failed: currentFollowUp?.is_failed,
          }
        : {
            habit: habit?.id,
            date,
            daily_goal: dailyGoal,
            daily_counter: 0,
            story: "",
            is_accomplished: false,
            is_failed: false,
          },
      fields: {
        story: {
          label: "Notes",
        },
        daily_counter: {
          label: `${measure?.name} (${dailyGoal} to complete)`,
        },
      },
    });

  const defaultStatus = useMemo(() => {
    if (form.is_accomplished) {
      return "accomplished";
    } else if (form.is_failed) {
      return "failed";
    } else {
      return "in-progress";
    }
  }, [form]);

  const onChangeStatus = ({ target: { value } }: any) => {
    const accomplished = value === "accomplished";
    const failed = value === "failed";
    changeForm({
      ...form,
      is_accomplished: accomplished,
      is_failed: failed,
    });
  };

  const handleSubmit = useCallback(() => {
    onSubmit?.(form);
  }, [form, onSubmit]);

  return (
    <Form>
      {Boolean(needMeasure) && (
        <NumberField {...fields.daily_counter} max={1440} />
      )}
      <TextAreaField {...fields.story} />
      <OptionsField
        value={defaultStatus}
        onChange={onChangeStatus}
        options={[
          { label: "In progress", value: "in-progress" },
          { label: "Accomplished", value: "accomplished" },
          { label: "Failed", value: "failed" },
        ]}
      />
      <Fieldset className="flex justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          disabled={!isValidForm || loading}
          variant="primary"
          onClick={handleSubmit}
        >
          {loading ? "Saving..." : isEditing ? "Update" : "Save"}
        </Button>
      </Fieldset>
    </Form>
  );
};

export default AddFollowUpForm;
