import styled, { css } from "styled-components";
import { Typography } from "../Typography/Typography";
import { SunIconComponent } from "../../icons/SunIconComponent";
import { breakpoints } from "../../theme";

export const SwitcherContainer = styled.div`
  display: flex;
  width: 162px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tabletMax}px) {
    justify-content: flex-end;
  }
`;
export const SwitcherText = styled(Typography)`
  transition: 1.4s;

    @media (max-width: ${breakpoints.tabletMax}px) {
    display: none;
  }
`;
export const SwitcherButton = styled.button`
  background: ${(props) => props.theme.colors.switcherContainer};
  width: 48px;
  height: 26px;
  padding: 0 3px;
  box-sizing: border-box;
  border-radius: 13px;
  border: 1px solid ${(props) => props.theme.colors.switcherDot};
  transition: 1.4s;
  cursor: pointer;
`;

export const SwitcherButtonDot = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.switcherDot};
  transition: 0.4s ease-out;

  ${({ onSwitch }) =>
    onSwitch &&
    css`
      transform: translateX(20px);
    `}
`;

export const SunIconStyled = styled(SunIconComponent)``;
