import { CourseSchema } from "types/schemas/courses";

interface CourseItemProps {
  course: CourseSchema;
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  return (
    <div className="course-item">
      <p>{course.title}</p>
      <p>{course.description}</p>
      <hr />
    </div>
  );
};

export default CourseItem;
