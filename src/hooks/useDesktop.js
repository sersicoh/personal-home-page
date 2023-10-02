import { useState, useEffect } from "react";
import { breakpoints } from "../theme";

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoints.mobileMax
  );

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
};

export default useDesktop;
