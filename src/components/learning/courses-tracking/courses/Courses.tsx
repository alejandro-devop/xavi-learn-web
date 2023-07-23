import CoursesList from "./CoursesList";
import { useState } from "react";
import AddCourse from "./AddCourse";
import Dialog from "components/dialogs/dialog/Dialog";

const Courses: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const toggleAdd = () => setOpenedAdd(!openedAdd);
  console.log("Opened: ", openedAdd);
  return (
    <div>
      <p>Courses</p>
      <CoursesList />
      <Dialog
        open={openedAdd}
        title={"Some cool"}
        // onClose={() => toggleAdd()}
        disableFooter
      >
        <AddCourse onCancel={toggleAdd} onSaved={toggleAdd} />
      </Dialog>
    </div>
  );
};

export default Courses;
