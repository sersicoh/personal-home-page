import { SkillsContainer } from "../../common/SkillsContainer/SkillsContainer";

export const CurrentSkills = (props) => {
  const header = "My skillset includes 🛠️";
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
    "tenthElement",
  ];

  return <SkillsContainer content={content} header={header} {...props} />;
};
