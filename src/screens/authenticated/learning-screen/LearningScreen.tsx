import Breadcrumbs from "core/components/breadcrumbs";
import { Button } from "core/components/buttons";
import { PageTitle } from "components/page";
import { useRouting } from "core/hooks";
// import CoursesFollowup from "components/learning/courses-tracking/courses-followup";
// import LearningTracking from "components/learning/learning-tracking";
// import Programming from "components/learning/programming";

const LearningScreen: ScreenType = () => {
  const { goTo } = useRouting();
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", path: "dashboard" },
          { label: "Learning", path: "learning" },
        ]}
      />
      <PageTitle title="Learning" subtitle="Courses" />
      <div className="content-wrapper">
        <Button onClick={() => goTo("coursesList")}>Go to courses</Button>
      </div>
    </>
  );
};

export default LearningScreen;
