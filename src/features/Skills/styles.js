import styled from "styled-components";

export const SkillsBox = styled.section`
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-top: 63px;
`;
export const Wrapper = styled.section`
  padding: 32px;
`;

export const Header = styled.div`
  font-size: 30px;
  line-height: 36px;
  color: ${({theme}) => theme.colors.mineShaft};
  font-weight: 900;
  letter-spacing: 0.05em;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-inline-start: 0;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const SkillItemDot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 16px;
  background: ${({theme}) => theme.colors.scienceBlue};
  border-radius: 50%;
`;

export const SkillContent = styled.div`
  color: ${({theme}) => theme.colors.staleGray};
  list-style-type: none;
`;