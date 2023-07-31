import { styled } from "styled-components";

export const TypographyHeaderH1 = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${(props) => props.color || props.theme.black};
`;
export const TypographyHeaderH2 = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${(props) => props.color || props.theme.black};
`;
export const TypographyHeaderH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.color || props.theme.black};
`;
export const TypographyParagraphMid = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.color || props.theme.black};
`;
export const TypographyParagraphLead = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.color || props.theme.black};
`;

export const TypographyCrumb = styled.p`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.black};
`;
