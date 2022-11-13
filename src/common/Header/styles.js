import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-column-gap: 66px;
  align-items: center;
  margin-top: 115px;
  grid-template-areas:
  "picture switchTheme"
  "picture who"
  "picture name"
  "picture description"
  "picture hireButton";
`;

export const Picture = styled.img`
  grid-area: picture;
  max-width: 400px;
  border-radius: 50%; 
`;

export const SwitchTheme = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.staleGray};
`;
export const Who = styled.div`
  grid-area: who;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.staleGray};
  //margin-bottom: 12px;
  margin-top: 68px
`;

export const Name = styled.div`
  grid-area: name;
  font-size: 38px;
  font-weight: 900;
  color: ${({theme}) => theme.colors.mineShaft};
`;

export const Description = styled.div`
  grid-area: description;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({theme}) => theme.colors.staleGray};
`;

export const HireButton = styled.button`
  grid-area: hireButton;
  max-width: 154px;
  max-height: 49px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background: ${({theme}) => theme.colors.scienceBlue};
`;
export const HireButtonIcon = styled.div`
  color: ${({theme}) => theme.colors.white};

`;
export const HireButtonText = styled.div`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({theme}) => theme.colors.white};
`;

