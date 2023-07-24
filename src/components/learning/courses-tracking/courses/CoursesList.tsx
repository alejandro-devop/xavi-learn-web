import { useGet } from "contexts/api-context/hooks";
import { CourseSchema } from "types/schemas/courses";
import { useCallback, useState } from "react";
import Dialog from "components/dialogs/dialog";
import AddCourse from "./AddCourse";
import { Button } from "components/buttons";
import Table from "components/table/Table";
import { useRouting } from "hooks";

const CoursesList: React.FC = () => {
  const [courses, loading, { refetch }] =
    useGet<CourseSchema[]>("courses.list");
  const { goTo } = useRouting();
  const [openedAdd, setOpenedAdd] = useState(false);
  const toggleAdd = () => setOpenedAdd(!openedAdd);
  const handleSaved = () => {
    refetch();
    toggleAdd();
  };
  const handleActionCalled = useCallback(
    (action: string, item: CourseSchema) => {
      if (action === "view") {
        goTo("coursesView", {
          params: {
            courseId: item.id,
          },
        });
      }
    },
    [goTo]
  );

  return (
    <>
      <div>
        <Button onClick={toggleAdd}>Add</Button>
      </div>
      {loading && <p>Loading...</p>}
      <Table
        title="List of courses"
        colLabels={{
          title: "Title",
          description: "Description",
          completed_lessons: "Completed",
          percentage: "Progress",
          lessons: "Lessons",
        }}
        columns={[
          "title",
          "description",
          "lessons",
          "percentage",
          "completed_lessons",
        ]}
        actions={["view"]}
        onActionCalled={handleActionCalled}
        data={courses}
      />
      {/* {courses?.map((course) => (
        <CourseItem course={course} key={`course-${course.id}`} />
      ))} */}
      <Dialog open={openedAdd} title={"Some cool"} disableFooter>
        <AddCourse onCancel={toggleAdd} onSaved={handleSaved} />
      </Dialog>
    </>
  );
};

export default CoursesList;
