import { Container } from "../Container/Container";
import { Typography } from "../Typography/Typography";
import { Item, List, SkillsBorderLine } from "./skillsContainer.styles";
//TODO stylowanie elementow skilli
export const SkillsContainer = (props) => {
  return (
    <Container {...props}>
      <Typography tag={"h2"} content={props.header} />
      <SkillsBorderLine />
      <List>
        {props.content.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
    </Container>
  );
};
