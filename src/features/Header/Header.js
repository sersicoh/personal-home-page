import { Container } from "../../common/Container/Container";
import { Typography } from "../../common/Typography/Typography";
import { SelfieImage } from "../SelfieImage/SelfieImage";

export const Header = () => {
  return (
    <Container>
      <SelfieImage image={"https://lh3.googleusercontent.com/a/AAcHTted5zjPNUv2Zh-pzL1Ff8lDBi2xikWohywcgbWnShwpYoS0=s288-c-no"}/>
      <Typography tag={"h1"} content={"Dupa"} />
      <Typography tag={"h2"} content={"Dupa"} />
      <Typography tag={"h3"} content={"Dupa"} />
      <Typography tag={"p-mid"} content={"Dupa"} />
      <Typography tag={"p-lead"} content={"Dupa"} />
      <Typography tag={"crumb"} content={"Dupa"} />
    </Container>
  );
};
