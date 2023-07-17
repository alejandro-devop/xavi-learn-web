import ProgrammingFollowups from "./programming-followups";
import ProgrammingLanguages from "./programming-languages";
import ProgrammingTopicTypes from "./programming-topic-types";
import ProgrammingTopics from "./programming-topics";

const Programming: React.FC = () => {
  return (
    <>
      <p>Programming component</p>
      <ProgrammingLanguages />
      <ProgrammingTopicTypes />
      <ProgrammingTopics />
      <ProgrammingFollowups />
      <hr />
    </>
  );
};

export default Programming;
