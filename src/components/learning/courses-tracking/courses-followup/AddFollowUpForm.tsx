import { useForm } from "hooks";
import config from "./form.config";
import Form, { Fieldset, TextField } from "components/form";
import { Button } from "components/buttons";
import { CourseFollowUpSchema } from "types/schemas/courses";
import ErrorRenderer from "components/form/error-renderer";
import MakrDownEditor from "./MarkDownEditor";
import SelectSourceField from "components/form/select-source-field/SelectSourceField";
import { useParams } from "react-router-dom";

interface AddFollowUpFormProps {
  loading?: boolean;
  errors?: string[] | null;
  isUpdate?: boolean;
  followUp?: CourseFollowUpSchema;
  onSubmit?: (form: CourseFollowUpSchema) => void;
  onCancel?: () => void;
}

const AddFollowUpForm: React.FC<AddFollowUpFormProps> = ({
  isUpdate,
  followUp,
  loading,
  onCancel,
  onSubmit,
  errors,
}) => {
  const { courseId } = useParams();
  const [fields, form, { isValidForm }] = useForm(
    isUpdate
      ? { ...config, defaultValues: followUp }
      : { ...config, defaultValues: { course_id: courseId } }
  );
  return (
    <Form>
      <ErrorRenderer errors={errors} />
      <SelectSourceField
        source="courses.list"
        mapTo={{ label: "title", value: "id" }}
        {...fields.course_id}
      />
      <TextField {...fields.title} />
      <TextField {...fields.url} />
      <MakrDownEditor {...fields.content} />
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
