import { styled } from "styled-components";
import { theme } from "../../theme";

export const TypographyHeaderH1 = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.backgroundColor || theme.colors.black};
`;
export const TypographyHeaderH2 = styled.h2`
  font-weight: 900;
  font-size: 30px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.backgroundColor || theme.colors.black};
`;

export const TypographyHeaderH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.backgroundColor || theme.colors.black};
`;
export const TypographyParagraphMid = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.backgroundColor || theme.colors.black};
`;
export const TypographyParagraphLead = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: ${(props) => props.backgroundColor || theme.colors.crumb};
`;

export const TypographyCrumb = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin: 0;
  text-transform: uppercase;
  color: ${(props) => props.backgroundColor || theme.colors.crumb};
`;
export const TypographyMail = styled.a`
  font-weight: 900;
  font-size: 32px;
  margin: 0;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: ${(props) => props.backgroundColor || theme.colors.mainBlue};
  &:hover {
    color: ${theme.colors.buttonSelected};
  }
`;
