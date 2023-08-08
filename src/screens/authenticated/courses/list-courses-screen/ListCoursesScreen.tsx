import Breadcrumbs from "core/components/breadcrumbs";
import Courses from "components/learning/courses-tracking/courses";
import { PageTitle } from "components/page";
// import CoursesFollowup from "components/learning/courses-tracking/courses-followup";
// import LearningTracking from "components/learning/learning-tracking";
// import Programming from "components/learning/programming";

const ListCoursesScreen: ScreenType = () => {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", path: "dashboard" },
          { label: "Learning", path: "learning" },
          { label: "Courses" },
        ]}
      />
      <PageTitle title="Learning" subtitle="Courses" />
      <div className="content-wrapper">
        <Courses />
      </div>
      {/* <CoursesFollowup />
      <LearningTracking />
      <Programming /> */}
    </>
  );
};

export default ListCoursesScreen;
