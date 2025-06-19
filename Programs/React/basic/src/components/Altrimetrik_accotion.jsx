import React from "react";
import { useState } from "react";

const Altrimetrik_accotion = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);

  const handleClick = () => {
    if (!click1) {
      setClick(!click);
    }
  };

  const handleClick1 = () => {
    if (!click) {
      setClick1(!click1);
    }
  };

  return (
    <div>
      <div>
        <h1 onClick={handleClick}>heading1</h1>
        {click && <p>aaaaaaaaaaaaaa</p>}
      </div>
      <div>
        <h1 onClick={handleClick1}>heading2</h1>
        {click1 && <p>bbbbbbbbbbbbbbb</p>}
      </div>
    </div>
  );
};

export default Altrimetrik_accotion;
