import { Container } from "../Container/Container";
import {
  ColumnContainer,
  Description,
  Link,
  Preffix,
  RowContainer,
  Title,
} from "./projectTile.styles";

export const ProjectTile = ({
  name,
  description,
  homepage,
  html_url,
  ...props
}) => {
  return (
    <Container {...props}>
      <Title
        tag={"h3"}
        content={name}
        color={(props) => props.theme.colors.projectTileTitle}
      />
      <Description tag={"p-lead"} content={description} />
      <RowContainer>
        <ColumnContainer>
          <Preffix tag={"p-lead"} content={"Demo:"} />
          <Link tag={"a"} href={homepage} content={homepage} />
        </ColumnContainer>
        <ColumnContainer>
          <Preffix tag={"p-lead"} content={"Code:"} />
          <Link tag={"a"} href={html_url} content={html_url} />
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
};
