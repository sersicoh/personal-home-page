import { styled } from "styled-components";
import { Typography } from "../Typography/Typography";
import { breakpoints } from "../../theme";

export const List = styled.ul`
  display: grid;
  width: 100%;
  row-gap: 8px;
  padding: 0;
  margin: 0;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${breakpoints.mobileMax}px) {
    padding-left: 14px;

    &::before {
      width: 6px;
      height: 6px;
    }
  }
`;
export const SkillWrapper = styled.div`
  width: calc(100% - 64px);
  padding: 32px;

  @media (max-width: ${breakpoints.mobileMax}px) {
    width: calc(100% - 32px);
    padding: 16px;
  }
`;
export const SkillContent = styled(Typography)``;
export const SkillsTitle = styled(Typography)`
  margin-bottom: 13px;
`;
export const SkillsUnderLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.underLine};
  width: 100%;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.mobileMax}px) {
    margin-bottom: 12px;
  }
`;
