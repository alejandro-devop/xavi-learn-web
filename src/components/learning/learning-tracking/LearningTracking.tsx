import Learning from "./learning";
import LearningCategories from "./learning-categories";

const LearningTracking: React.FC = () => {
  return (
    <>
      <p>Learning tracking</p>
      <LearningCategories />
      <Learning />
    </>
  );
};

export default LearningTracking;
