import {
  TypographyCrumb,
  TypographyHeaderH1,
  TypographyHeaderH2,
  TypographyHeaderH3,
  TypographyParagraphLead,
  TypographyParagraphMid,
} from "./typography.styles";

export const Typography = ({ tag, content }) => {
  switch (tag) {
    case "h1":
      return (
        <TypographyHeaderH1 color={({ theme }) => theme.colors.black}>
          {content}
        </TypographyHeaderH1>
      );
    case "h2":
      return (
        <TypographyHeaderH2 color={({ theme }) => theme.colors.black}>
          {content}
        </TypographyHeaderH2>
      );
    case "h3":
      return (
        <TypographyHeaderH3 color={({ theme }) => theme.colors.black}>
          {content}
        </TypographyHeaderH3>
      );
    case "p-mid":
      return (
        <TypographyParagraphMid color={({ theme }) => theme.colors.black}>
          {content}
        </TypographyParagraphMid>
      );
    case "p-lead":
      return (
        <TypographyParagraphLead color={({ theme }) => theme.colors.black}>
          {content}
        </TypographyParagraphLead>
      );
    case "crumb":
      return (
        <TypographyCrumb color={({ theme }) => theme.colors.crumb}>
          {content}
        </TypographyCrumb>
      );

    default:
      break;
  }
};
