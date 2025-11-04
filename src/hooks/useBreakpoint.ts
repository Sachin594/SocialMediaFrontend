import { useState, useEffect } from "react";

const useBreakpointHeight = (heightBreakpoint: number): boolean => {
  const [isBelowHeight, setIsBelowHeight] = useState<boolean>(
    typeof window !== "undefined"
      ? window.innerHeight < heightBreakpoint
      : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowHeight(window.innerHeight < heightBreakpoint);
    };

    // 👇 Listen for resize events
    window.addEventListener("resize", handleResize);

    // 👇 Trigger immediately once on mount to ensure correctness
    handleResize();

    // 👇 Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [heightBreakpoint]);

  return isBelowHeight;
};
const useBreakpointWidth = (widthBreakpoint: number) => {
  const [isBelowWidth, setIsBelowWidth] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < widthBreakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowWidth(window.innerWidth < widthBreakpoint);
    };

    // 👇 Listen for resize events
    window.addEventListener("resize", handleResize);

    // 👇 Trigger immediately once on mount to ensure correctness
    handleResize();

    // 👇 Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthBreakpoint]);

  return isBelowWidth;
};

export { useBreakpointHeight, useBreakpointWidth };
