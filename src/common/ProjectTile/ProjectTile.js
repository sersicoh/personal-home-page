import { theme } from "../../theme";
import { Container } from "../Container/Container";
import {
  ColumnContainer,
  Description,
  Link,
  Preffix,
  RowContainer,
  Title,
} from "./projectTile.styles";

export const ProjectTile = ({ contnetto, ...props }) => {
  return (
    <Container {...props}>
      <Title
        tag={"h3"}
        content={contnetto.title}
        color={theme.colors.mainBlue}
      />
      <Description tag={"p-lead"} content={contnetto.description} />
      <RowContainer>
        <ColumnContainer>
          <Preffix tag={"p-lead"} content={"Demo:"} />
          <Link tag={"a"} content={contnetto.demo} />
        </ColumnContainer>
        <ColumnContainer>
          <Preffix tag={"p-lead"} content={"Code:"} />
          <Link tag={"a"} content={contnetto.code} />
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
};
