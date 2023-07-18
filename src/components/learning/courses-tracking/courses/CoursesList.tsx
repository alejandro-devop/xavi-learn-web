import { useGet } from "contexts/api-context/hooks";
import { CourseSchema } from "types/schemas/courses";
import CourseItem from "./CourseItem";

const CoursesList: React.FC = () => {
  const [courses, loading] = useGet<CourseSchema[]>("courses.list");
  console.log(courses);
  return (
    <>
      {loading && <p>Loading...</p>}
      {courses?.map((course) => (
        <CourseItem course={course} key={`course-${course.id}`} />
      ))}
    </>
  );
};

export default CoursesList;
