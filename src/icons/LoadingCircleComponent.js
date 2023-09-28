import { useTheme } from "styled-components";

export const LoadingCircleComponent = (props) => {
  const theme = useTheme();
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="80"
        cy="80"
        r="74.3125"
        stroke={theme.colors.loadingIconPositive}
        stroke-opacity="0.72"
        stroke-width="11.375"
      />
      <path
        d="M132.547 27.4531C146.483 41.3894 154.312 60.2911 154.312 80C154.313 99.7089 146.483 118.611 132.547 132.547"
        stroke={theme.colors.loadingIconNegative}
        stroke-width="11.375"
      />
    </svg>
  );
};
