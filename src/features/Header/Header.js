import { Container } from "../../common/Container/Container";
import { CustomButton } from "../../common/CustomButton/CustomButton";
import { SwitchTheme } from "../../common/SwitchTheme/SwitchTheme";
import {
  HeaderName,
  HeaderBanner,
  SelfieImage,
  HeaderCrumb,
  HeaderDescription,
  HeaderButton,
  DarkModeSwitcher,
} from "./header.styles";

export const Header = ({ content, ...props }) => {
  return (
    <Container {...props}>
      <HeaderBanner>
        <SelfieImage
          src="https://lh3.googleusercontent.com/a/AAcHTted5zjPNUv2Zh-pzL1Ff8lDBi2xikWohywcgbWnShwpYoS0=s288-c-no"
          alt="My seflie photo"
        />
        <DarkModeSwitcher>
          <SwitchTheme
            isDarkTheme={props.isDarkTheme}
            toggleTheme={props.toggleTheme}
          />
        </DarkModeSwitcher>
        <HeaderCrumb tag={"crumb"} content={"this is"} />
        <HeaderName tag={"h1"} content={content.name} />
        <HeaderDescription tag={"p-lead"} content={content.description} />
        <HeaderButton>
          <CustomButton
            icon
            content={"Hire Me"}
            href={`mailto: ${content.mail}`}
          />
        </HeaderButton>
      </HeaderBanner>
    </Container>
  );
};
