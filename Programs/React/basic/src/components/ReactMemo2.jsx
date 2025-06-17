import React from "react";

const ReactMemo2 = ({ count2 }) => {
  console.log("count2");
  return (
    <div>
      ReactMemo2
      <p>{count2}</p>
    </div>
  );
};

export default React.memo(ReactMemo2);
