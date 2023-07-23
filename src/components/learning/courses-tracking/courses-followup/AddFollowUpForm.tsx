import { useForm } from "hooks";
import config from "./form.config";
import Form, { Fieldset } from "components/form";
import { Button } from "components/buttons";
import { CourseSchema } from "types/schemas/courses";
import ErrorRenderer from "components/form/error-renderer";

interface AddFollowUpFormProps {
  loading?: boolean;
  errors?: string[] | null;
  isUpdate?: boolean;
  course?: CourseSchema;
  onSubmit?: (form: CourseSchema) => void;
  onCancel?: () => void;
}

const AddFollowUpForm: React.FC<AddFollowUpFormProps> = ({
  isUpdate,
  course,
  loading,
  onCancel,
  onSubmit,
  errors,
}) => {
  const [fields, form, { isValidForm }] = useForm(
    isUpdate ? { ...config, defaultValues: course } : config
  );
  return (
    <Form>
      <ErrorRenderer errors={errors} />

      <Fieldset>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <Button disabled={!isValidForm} onClick={() => onSubmit?.(form)}>
            {isUpdate ? "Update" : "Add"}
          </Button>
        )}
        <Button onClick={onCancel}>Cancel</Button>
      </Fieldset>
    </Form>
  );
};

export default AddFollowUpForm;
