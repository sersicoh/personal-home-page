import { Container } from "../../common/Container/Container";
import { Typography } from "../../common/Typography/Typography";
import {
  HeaderName,
  HeaderBanner,
  SelfieImage,
  HeaderCrumb,
  HeaderDescription,
  HeaderButton,
} from "./header.styles";

export const Header = () => {
  return (
    <Container>
      <HeaderBanner>
        <SelfieImage
          src="https://lh3.googleusercontent.com/a/AAcHTted5zjPNUv2Zh-pzL1Ff8lDBi2xikWohywcgbWnShwpYoS0=s288-c-no"
          alt="My seflie photo"
        />
        <HeaderCrumb tag={"crumb"} content={"this is"} />
        <HeaderName tag={"h1"} content={"Wojciech Szymczak"} />
        <HeaderDescription
          tag={"p-mid"}
          content={`This is my private GitHub Profile. You can find hire my first serious steps with programming. I'm currently learning React, Redux, JavaScripts and I really like to learn TypeScript.`}
        />
        <HeaderButton>dupa</HeaderButton>
      </HeaderBanner>
      <Typography tag={"h2"} content={"Dupa"} />
      <Typography tag={"h3"} content={"Dupa"} />
      <Typography tag={"p-mid"} content={"Dupa"} />
      <Typography tag={"p-lead"} content={"Dupa"} />
      <Typography tag={"crumb"} content={"Dupa"} />
    </Container>
  );
};
