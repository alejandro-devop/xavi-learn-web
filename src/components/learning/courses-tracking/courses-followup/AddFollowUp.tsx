import { usePost } from "core/contexts/api-context/hooks";
import CourseForm from "./AddFollowUpForm";
import { CourseFollowUpSchema } from "types/schemas/courses";

interface AddFollowUpProps {
  onSaved?: (courseId?: string) => void;
  onCancel?: () => void;
}

const AddFollowUp: React.FC<AddFollowUpProps> = ({ onCancel, onSaved }) => {
  const [sendRequest, loading, { errors }] = usePost<
    CourseFollowUpSchema,
    CourseFollowUpSchema
  >("courses.followUps.save");
  const onSubmit = async (form: CourseFollowUpSchema) => {
    try {
      const { status, data } = await sendRequest({
        ...form,
        complete_lesson: true,
      });
      if (status) {
        onSaved?.(data?.course_id);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <CourseForm
        loading={loading}
        onCancel={onCancel}
        errors={errors}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default AddFollowUp;
