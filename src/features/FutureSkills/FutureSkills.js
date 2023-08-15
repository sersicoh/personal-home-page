import { SkillsContainer } from "../../common/SkillsContainer/SkillsContainer";

export const FutureSkills = (props) => {
  const header = "What I want to learn next 🚀";
  const content = [
    "firstElement",
    "secondElement",
    "thirdElement",
    "fourthElement",
    "fifthElement",
    "sixthElement",
    "seventhElement",
    "eighthElement",
    "ninthElement",
    "hElement",
  ];
  return <SkillsContainer content={content} header={header} {...props} />;
};
