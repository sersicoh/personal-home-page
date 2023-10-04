import styled from "styled-components";
import { Typography } from "../../../common/Typography/Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentStyled = styled(Typography)`
  margin-top: 88px;
`;
export const LoadingCricleStyled = styled.div`
  margin-top: 48px;
  height: 160px;
  transform: rotate(360deg);
  animation: spin;
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: translateX(360deg);
    }
  }
`;
