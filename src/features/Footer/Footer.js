import { Container } from "../../common/Container/Container";
import { GithubIconComponent } from "../../icons/GithubIconComponent";
import { FooterCrumb, FooterDescription, Mail } from "./footer.styles";

export const Footer = () => {
    //TODO dorobić ikony i wrzucić do wrappera
  return (
    <Container>
      <FooterCrumb tag={"crumb"} content={"let's talk"} />
      <Mail tag={"mail"} content={"sersicoh@gmail.com"} />
      <FooterDescription
        tag={"p-lead"}
        content={`This is my private GitHub Profile. You can find hire my first serious steps with programming. I'm currently learning React, Redux, JavaScripts and I really like to learn TypeScript.`}
      />
      <GithubIconComponent />
    </Container>
  );
};
