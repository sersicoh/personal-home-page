import {
  TypographyCrumb,
  TypographyHeaderH1,
  TypographyHeaderH2,
  TypographyHeaderH3,
  TypographyMail,
  TypographyParagraphLead,
  TypographyParagraphMid,
} from "./typography.styles";

export const Typography = ({ tag, content, href, color, ...props }) => {
  switch (tag) {
    case "h1":
      return (
        <TypographyHeaderH1 backgroundColor={color} {...props}>
          {content}
        </TypographyHeaderH1>
      );
    case "h2":
      return (
        <TypographyHeaderH2 backgroundColor={color} {...props}>
          {content}
        </TypographyHeaderH2>
      );
    case "h3":
      return (
        <TypographyHeaderH3 backgroundColor={color} {...props}>
          {content}
        </TypographyHeaderH3>
      );
    case "p-mid":
      return (
        <TypographyParagraphMid backgroundColor={color} {...props}>
          {content}
        </TypographyParagraphMid>
      );
    case "p-lead":
      return (
        <TypographyParagraphLead backgroundColor={color} {...props}>
          {content}
        </TypographyParagraphLead>
      );
    case "crumb":
      return (
        <TypographyCrumb backgroundColor={color} {...props}>
          {content}
        </TypographyCrumb>
      );
    case "mail":
      return (
        <TypographyMail
          backgroundColor={color}
          href={`mailto: ${content}`}
          {...props}
        >
          {content}
        </TypographyMail>
      );
    case "a":
      return (
        <TypographyMail backgroundColor={color} href={`${href}`} {...props}>
          {content}
        </TypographyMail>
      );

    default:
      break;
  }
};
