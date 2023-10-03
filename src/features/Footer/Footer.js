import { Container } from "../../common/Container/Container";
import useDesktop from "../../hooks/useDesktop";
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
  const isDesktop = useDesktop();
  return (
    <Container {...props}>
      <FooterCrumb tag={"crumb"} content={"let's talk"} />
      <Mail tag={"mail"} content={content.mail} />
      <FooterDescription
        tag={"p-mid"}
        color={(props) => props.theme.colors.mail}
        content={
          <>
            {content.description}{" "}
            {content.repo_link ? (
              <a href={content.repo_link}>{content.repo_text}</a>
            ) : null}
          </>
        }
      />
      <IconContainer>
        <LinkIconContainer href={content.github_link}>
          <GithubIconStyled
            width={isDesktop ? 48 : 32}
            height={isDesktop ? 48 : 32}
          />
        </LinkIconContainer>
        <LinkIconContainer href={content.facebook_link}>
          <FacebookIconStyled
            width={isDesktop ? 48 : 32}
            height={isDesktop ? 48 : 32}
          />
        </LinkIconContainer>
        <LinkIconContainer href={content.linkedIn_link}>
          <LinkedinIconStyled
            width={isDesktop ? 48 : 32}
            height={isDesktop ? 48 : 32}
          />
        </LinkIconContainer>
      </IconContainer>
    </Container>
  );
};
