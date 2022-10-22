import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-column-gap: 66px;
  align-items: center;
  grid-template-areas:
  "picture who"
  "picture name"
  "picture description"
  "picture hireButton";
`;

export const Picture = styled.img`
  grid-area: picture;
  max-width: 400px;
  margin-top: 115px;
  border-radius: 50%;
`;

export const Who = styled.div`
  grid-area: who;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.staleGray};
  margin-bottom: 12px;
  margin-top: 183px
`;

export const Name = styled.div`
  grid-area: name;
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 35px;
`;

export const Description = styled.div`
  grid-area: description;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({theme}) => theme.colors.staleGray};

`;
// TODO zrobić przycisk HireButton, jak na filmie z kursu - obramowanie bedzie trzeba wylaczyc
export const HireButton = styled.button`
  max-width: 154px;
  max-height: 49px;
  grid-area: hireButton;
  display: flex;
  justify-content: center;
  align-items: center;
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