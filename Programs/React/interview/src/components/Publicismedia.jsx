import React, { useState, useEffect } from "react";

const Publicismedia = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);

    // Set a timeout to reset scrolling status after 1 second of inactivity
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "2000px", background: "#f0f0f0" }}>
      <h1>Scroll detection in React</h1>
      <div>
        <p>Scroll down to trigger the event!</p>
        <p>Scroll down to trigger the event!</p>
        <p>Scroll down to trigger the event!</p>
        <p>Scroll down to trigger the event!</p>
        <p>Scroll down to trigger the event!</p>
        <p>{isScrolling ? "User is scrolling" : "User is not scrolling"}</p>
      </div>
    </div>
  );
};

export default Publicismedia;