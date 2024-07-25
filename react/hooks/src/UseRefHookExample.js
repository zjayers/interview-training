import { useEffect, useRef, useState } from "react";

export const UseRefHookExample = () => {
  const titleRef = useRef();
  const [titleHeight, setTitleHeight] = useState(0);
  const [titleWidth, setTitleWidth] = useState(0);

  const handleResize = () => {
    setTitleHeight(titleRef.current.offsetHeight);
    setTitleWidth(titleRef.current.offsetWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <hr />
      <h4 ref={titleRef}>Use Ref Hook Example</h4>
      <p>Title Height Is: {titleHeight}px</p>
      <p>Title Width Is: {titleWidth}px</p>
    </div>
  );
};
