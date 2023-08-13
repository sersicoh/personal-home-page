import {
  TypographyCrumb,
  TypographyHeaderH1,
  TypographyHeaderH2,
  TypographyHeaderH3,
  TypographyParagraphLead,
  TypographyParagraphMid,
} from "./typography.styles";

export const Typography = ({ tag, content, color }) => {
  switch (tag) {
    case "h1":
      return <TypographyHeaderH1 color={color}>{content}</TypographyHeaderH1>;
    case "h2":
      return <TypographyHeaderH2 color={color}>{content}</TypographyHeaderH2>;
    case "h3":
      return <TypographyHeaderH3 color={color}>{content}</TypographyHeaderH3>;
    case "p-mid":
      return (
        <TypographyParagraphMid color={color}>{content}</TypographyParagraphMid>
      );
    case "p-lead":
      return (
        <TypographyParagraphLead color={color}>
          {content}
        </TypographyParagraphLead>
      );
    case "crumb":
      return <TypographyCrumb color={color}>{content}</TypographyCrumb>;

    default:
      break;
  }
};
