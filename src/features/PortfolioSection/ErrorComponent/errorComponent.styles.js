import styled from "styled-components";
import { Typography } from "../../../common/Typography/Typography";
import { ErrorIconComponent } from "../../../icons/ErrorIconComponent";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorIconStyled = styled(ErrorIconComponent)`
  margin-top: 88px;
  /* fill: ${(props) => props.theme.colors.errorIcon}; */
  stroke: ${(props) => props.theme.colors.errorIcon};
`;
export const HeaderStyled = styled(Typography)`
  margin-top: 16px;
`;
export const ContentStyled = styled(Typography)`
  margin: 32px 0;
`;
