import { styled } from "styled-components";

export const TypographyHeaderH1 = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || props.theme.colors.h1};
`;
export const TypographyHeaderH2 = styled.h2`
  font-weight: 900;
  font-size: 30px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || props.theme.colors.h2};
`;

export const TypographyHeaderH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || props.theme.colors.h3};
`;
export const TypographyParagraphMid = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  line-height: 25.2px;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || props.theme.colors.paragraphMid};
`;
export const TypographyParagraphLead = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || props.theme.colors.paragraphLead};
`;

export const TypographyCrumb = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin: 0;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.colors.crumb};
`;
export const TypographyMailLink = styled.a`
  font-weight: 900;
  font-size: 32px;
  margin: 0;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: ${(props) => props.color || props.theme.colors.mail};
  transition: all 0.25s ease;
  &:hover {
    color: ${(props) => props.color || props.theme.colors.mailHover};
  }
`;
export const TypographyLink = styled.a`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  line-height: 28px;
  letter-spacing: 0.05em;
  text-decoration-color: ${(props) => props.theme.colors.projectTileOnHover};
  text-underline-offset: 6px;
  color: ${(props) => props.color || props.theme.colors.link};
  transition: all 0.25s ease;
  &:hover {
    text-decoration-color: ${(props) => props.theme.colors.link};
  }
`;
