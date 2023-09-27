import { Container } from "../Container/Container";
import {
  Item,
  List,
  SkillContent,
  SkillsUnderLine,
  SkillsTitle,
} from "./skillsContainer.styles";
export const SkillsContainer = (props) => {
  return (
    <Container {...props}>
      <SkillsTitle tag={"h2"} content={props.header} />
      <SkillsUnderLine />
      <List>
        {props.content.map((item) => (
          <Item key={item}>
            {<SkillContent tag={"p-lead"} content={item} />}
          </Item>
        ))}
      </List>
    </Container>
  );
};
