import React from "react";

const ReactMemo1 = ({ count1 }) => {
  console.log("count1");

  return (
    <div>
      ReactMemo1
      <p>{count1}</p>
    </div>
  );
};

export default React.memo(ReactMemo1);
