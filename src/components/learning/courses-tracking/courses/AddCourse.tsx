import { usePost } from "core/contexts/api-context/hooks";
import CourseForm from "./CourseForm";
import { CourseSchema } from "types/schemas/courses";

interface AddCourseProps {
  onSaved?: () => void;
  onCancel?: () => void;
}

const AddCourse: React.FC<AddCourseProps> = ({ onCancel, onSaved }) => {
  const [sendRequest, loading, { errors }] = usePost<
    CourseSchema,
    CourseSchema
  >("courses.save");
  const onSubmit = async (form: CourseSchema) => {
    try {
      const { status } = await sendRequest(form);
      if (status) {
        onSaved?.();
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h3>Add course</h3>
      <CourseForm
        loading={loading}
        onCancel={onCancel}
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AddCourse;
