import { Container } from "../../common/Container/Container";
import { HireButton } from "./HireButton/HireButton";
import {
  HeaderName,
  HeaderBanner,
  SelfieImage,
  HeaderCrumb,
  HeaderDescription,
  HeaderButton,
  HeaderDarkMode,
} from "./header.styles";

export const Header = (props) => {
  return (
    <Container {...props}>
      <HeaderBanner>
        <SelfieImage
          src="https://lh3.googleusercontent.com/a/AAcHTted5zjPNUv2Zh-pzL1Ff8lDBi2xikWohywcgbWnShwpYoS0=s288-c-no"
          alt="My seflie photo"
        />
        <HeaderDarkMode>darkmode</HeaderDarkMode>
        <HeaderCrumb tag={"crumb"} content={"this is"} />
        <HeaderName tag={"h1"} content={"Wojciech Szymczak"} />
        <HeaderDescription
          tag={"p-lead"}
          content={`This is my private GitHub Profile. You can find hire my first serious steps with programming. I'm currently learning React, Redux, JavaScripts and I really like to learn TypeScript.`}
        />
        <HeaderButton>
          <HireButton content={"Hire Me"} />
        </HeaderButton>
      </HeaderBanner>
    </Container>
  );
};
