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

export const Footer = (props) => {
  return (
    <Container  {...props}>
      <FooterCrumb tag={"crumb"} content={"let's talk"} />
      <Mail tag={"mail"} content={"sersicoh@gmail.com"} />
      <FooterDescription
        tag={"p-mid"}
        content={`This is my private GitHub Profile. You can find hire my first serious steps with programming. I'm currently learning React, Redux, JavaScripts and I really like to learn TypeScript.`}
      />
      <IconContainer>
        <LinkIconContainer href="https://github.com/sersicoh">
          <GithubIconStyled />
        </LinkIconContainer>
        <FacebookIconStyled />
        <LinkedinIconStyled />
      </IconContainer>
    </Container>
  );
};
