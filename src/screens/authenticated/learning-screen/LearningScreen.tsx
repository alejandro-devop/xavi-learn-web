import LearningTracking from "components/learning/learning-tracking";
import Programming from "components/learning/programming";

const LearningScreen: ScreenType = () => {
  return (
    <>
      <h2>Learning</h2>
      <LearningTracking />
      <Programming />
    </>
  );
};

export default LearningScreen;
