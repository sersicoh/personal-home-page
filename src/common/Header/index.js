import {
    Description,
    HireButton,
    HireButtonIcon,
    HireButtonText,
    Name,
    Picture,
    SwitchTheme,
    Who,
    Wrapper
} from "./styles";
import {ReactComponent as Message} from "./Message.svg";
export const Header = () => (
    <Wrapper>
        <Picture src={"https://ca.slack-edge.com/T01RG0VJ7FF-U03F2JXDUCE-d38ac6966a72-512"} alt={"Wojtek Szymczak"}/>
        <SwitchTheme>Tu będzie przycisk</SwitchTheme>
        <Who>this is</Who>
        <Name>Wojtek Szymczak</Name>
        <Description>I’m a passionate Frontend Developer in love with React, currently looking for new job
            opportunities</Description>
        <HireButton>
            <HireButtonIcon><Message/></HireButtonIcon>
            <HireButtonText>Hire Me</HireButtonText>
        </HireButton>
    </Wrapper>
);
