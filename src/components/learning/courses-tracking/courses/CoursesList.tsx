import { useGet } from "core/contexts/api-context/hooks";
import { CourseSchema } from "types/schemas/courses";
import { useCallback, useState } from "react";
import Dialog from "core/components/dialogs/dialog";
import AddCourse from "./AddCourse";
import Table from "core/components/table/Table";
import { useRouting } from "core/hooks";

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
      if (action === "add") {
        toggleAdd();
      } else if (action === "view") {
        goTo("coursesView", {
          params: {
            courseId: item.id,
          },
        });
      }
    },
    [goTo, toggleAdd]
  );

  return (
    <>
      {loading && <p>Loading...</p>}
      <Table
        title="List of courses"
        tableActions={[
          {
            action: "add",
            label: "Add course",
            icon: "add",
            buttonProps: {
              variant: "primary",
              rounded: true,
            },
          },
        ]}
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
        actions={[
          { action: "view", icon: "eye" },
          { action: "delete", icon: "edit" },
          { action: "remove", icon: "trash" },
        ]}
        onTableActionCalled={handleActionCalled}
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
