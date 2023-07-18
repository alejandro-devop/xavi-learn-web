import { useForm } from "hooks";
import config from "./form.config";
import Form, {
  Fieldset,
  NumberField,
  TextAreaField,
  TextField,
} from "components/form";
import { Button } from "components/buttons";
import { CourseSchema } from "types/schemas/courses";
import ErrorRenderer from "components/form/error-renderer";

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
      <TextField {...fields.title} />
      <TextField {...fields.url} />
      <TextAreaField {...fields.description} />
      <NumberField {...fields.lessons} />
      <NumberField {...fields.percentage} />
      <NumberField {...fields.completed_lessons} />
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

export default CourseForm;
