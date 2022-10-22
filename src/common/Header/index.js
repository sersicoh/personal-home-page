import {Description, HireButton, HireButtonIcon, HireButtonText, Name, Picture, Who, Wrapper} from "./styles";

export const Header = () => (
    <Wrapper>
        <Picture src={"https://ca.slack-edge.com/T01RG0VJ7FF-U03F2JXDUCE-d38ac6966a72-512"} alt={"Wojtek Szymczak"}/>
        <Who>this is</Who>
        <Name>Wojtek Szymczak</Name>
        <Description>I’m a passionate Frontend Developer in love with React, currently looking for new job
            opportunities</Description>
        <HireButton>
            <HireButtonIcon>D </HireButtonIcon>
            <HireButtonText>Hire Me</HireButtonText>
        </HireButton>
    </Wrapper>
);
