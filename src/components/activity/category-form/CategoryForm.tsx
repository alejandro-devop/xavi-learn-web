import Form, {
  CheckboxField,
  TextAreaField,
  TextField,
  IconField,
  Fieldset,
  SubmitButton,
} from "components/form";
import { useForm } from "hooks";
import { ActivityCategoryFormType } from "types/forms/activity-category.types";
import formConfig from "./form.config";

interface CategoryFormProps {
  onSubmit?: (f: ActivityCategoryFormType) => void;
  loading?: boolean;
  isEditing?: boolean;
  item?: any;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  onSubmit,
  loading,
  isEditing,
  item,
}) => {
  const [fields, form, { isValidForm }] = useForm<ActivityCategoryFormType>(
    isEditing ? { ...formConfig, defaultValues: item } : formConfig
  );
  return (
    <Form onSubmit={() => onSubmit?.(form)}>
      <TextField {...fields.name} />
      <TextField {...fields.color} />
      <IconField {...fields.icon} />
      <TextAreaField {...fields.description} />
      <CheckboxField {...fields.is_rest} />
      <CheckboxField {...fields.is_work} />
      <CheckboxField {...fields.is_learning} />
      <CheckboxField {...fields.is_self_care} />
      <CheckboxField {...fields.is_exercise} />
      <CheckboxField {...fields.is_driving} />
      <CheckboxField {...fields.is_entertainment} />
      <CheckboxField {...fields.is_feeding} />
      <CheckboxField {...fields.is_idle} />
      <CheckboxField {...fields.is_loving} />
      <CheckboxField {...fields.is_planning} />
      <CheckboxField {...fields.is_playing} />
      <Fieldset>
        {loading ? (
          <span>Sending...</span>
        ) : (
          <SubmitButton disabled={!isValidForm}>
            {isEditing ? "Update" : "Create"}
          </SubmitButton>
        )}
      </Fieldset>
    </Form>
  );
};

export default CategoryForm;
