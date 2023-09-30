import { Container } from "../Container/Container";
import {
  Item,
  List,
  SkillContent,
  SkillsUnderLine,
  SkillsTitle,
  SkillWrapper,
} from "./skillsContainer.styles";
export const SkillsContainer = ({ content, ...props }) => {
  return (
    <Container {...props}>
      <SkillWrapper>
        <SkillsTitle tag={"h2"} content={content.title} />
        <SkillsUnderLine />
        <List>
          {content.skills.map((skill) => (
            <Item key={skill}>
              {<SkillContent tag={"p-mid"} content={skill} />}
            </Item>
          ))}
        </List>
      </SkillWrapper>
    </Container>
  );
};
