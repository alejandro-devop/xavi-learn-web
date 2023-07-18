import { Button } from "components/buttons";
import CoursesList from "./CoursesList";
import { useState } from "react";
import AddCourse from "./AddCourse";

const Courses: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(true);
  const toggleAdd = () => setOpenedAdd(!openedAdd);
  return (
    <div>
      <p>Courses</p>
      <div>
        <Button onClick={toggleAdd}>Add course</Button>
      </div>
      {openedAdd && <AddCourse onCancel={toggleAdd} onSaved={toggleAdd} />}
      {!openedAdd && <CoursesList />}
    </div>
  );
};

export default Courses;
