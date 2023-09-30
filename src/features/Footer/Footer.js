import { Container } from "../../common/Container/Container";
import {
  FacebookIconStyled,
  FooterCrumb,
  FooterDescription,
  GithubIconStyled,
  IconContainer,
  LinkIconContainer,
  LinkedinIconStyled,
  Mail,
} from "./footer.styles";

export const Footer = ({ content, ...props }) => {
  return (
    <Container {...props}>
      <FooterCrumb tag={"crumb"} content={"let's talk"} />
      <Mail tag={"mail"} content={content.mail} />
      <FooterDescription
        tag={"p-mid"}
        color={(props) => props.theme.colors.mail}
        content={content.description}
      />
      <IconContainer>
        <LinkIconContainer href={content.github_link}>
          <GithubIconStyled />
        </LinkIconContainer>
        <LinkIconContainer href={content.facebook_link}>
          <FacebookIconStyled />
        </LinkIconContainer>
        <LinkIconContainer href={content.linkedIn_link}>
          <LinkedinIconStyled />
        </LinkIconContainer>
      </IconContainer>
    </Container>
  );
};
