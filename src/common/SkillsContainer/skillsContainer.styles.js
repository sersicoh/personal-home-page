import { styled } from "styled-components";
import { Typography } from "../Typography/Typography";

export const List = styled.ul`
  display: grid;
  width: 100%;
  row-gap: 8px;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  padding-left: 34px;

  &::before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: ${(props) => props.theme.colors.dot};
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const SkillContent = styled(Typography)``;
export const SkillsTitle = styled(Typography)`
  margin-bottom: 13px;
`;
export const SkillsBorderLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  margin-bottom: 32px;
`;
