import {Header, SkillContent, SkillItem, SkillItemDot, SkillsBox, SkillsList, Wrapper} from "./styles";
//TODO to powinno być w common i wykorzystane dla skilli które ma i których chce sie nauczyc
export const Skills = () => {

    return (
        <SkillsBox>
            <Wrapper>
                <Header>My skillset includes</Header>
                <SkillsList>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa1</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa2</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa3</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa4</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa5</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa6</SkillContent></SkillItem>
                    <SkillItem><SkillItemDot/> <SkillContent>dupa7</SkillContent></SkillItem>
                </SkillsList>
            </Wrapper>
        </SkillsBox>

    );
};
export default Skills;
