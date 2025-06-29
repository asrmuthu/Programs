import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    handleSize();
    window.addEventListener("resize", handleSize);
  }, []);


  return size;
};

export default useWindowSize;