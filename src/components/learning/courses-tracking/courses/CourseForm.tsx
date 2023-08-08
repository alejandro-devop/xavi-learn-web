import { useForm } from "core/hooks";
import config from "./form.config";
import Form, {
  Fieldset,
  NumberField,
  TextAreaField,
  TextField,
} from "core/components/form";
import { Button } from "core/components/buttons";
import { CourseSchema } from "types/schemas/courses";
import ErrorRenderer from "core/components/form/error-renderer";

interface CourseFormProps {
  loading?: boolean;
  errors?: string[] | null;
  isUpdate?: boolean;
  course?: CourseSchema;
  onSubmit?: (form: CourseSchema) => void;
  onCancel?: () => void;
}

const CourseForm: React.FC<CourseFormProps> = ({
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
      <TextField {...fields.title} autoFocus />
      <TextField {...fields.url} />
      <TextAreaField {...fields.description} />
      <NumberField {...fields.lessons} />
      <NumberField {...fields.completed_lessons} />
      <Fieldset>
        <Button onClick={onCancel}>Cancel</Button>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <Button
            variant="primary"
            disabled={!isValidForm}
            onClick={() => onSubmit?.(form)}
          >
            {isUpdate ? "Update" : "Add"}
          </Button>
        )}
      </Fieldset>
    </Form>
  );
};

export default CourseForm;
