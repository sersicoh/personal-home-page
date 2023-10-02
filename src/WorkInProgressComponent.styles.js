import { styled } from "styled-components";
import { breakpoints } from "./theme";

export const WorkInProgressComponent = styled.div`
  display: flex;
  margin: 100px 0;
  justify-content: center;
  font-size: 50px;
  font-weight: 900;
  color: red;

  @media (max-width: ${breakpoints.mobileMax}px) {
    margin: 20px 0;
    font-size: 30px;
    font-weight: 700;
  }
`;
