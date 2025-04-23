import React from "react";

const Js = () => {
  return (
    <>
      <h4>JavaScript Interview Question and Answers</h4>
      <div>
        <div className="table-container js-1">
          <h6>Difference between Var, Let, and Const?</h6>
          <table>
            <thead>
              <tr>
                <th>Var</th>
                <th>Let</th>
                <th>Const</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Var is function scoped.</td>
                <td>Let is block scoped.</td>
                <td>Const is also block scoped.</td>
              </tr>
              <tr>
                <td>Var can be redeclared.</td>
                <td>Let cannot be redeclared.</td>
                <td>Const cannot be redeclared.</td>
              </tr>
              <tr>
                <td>Var can be reassigned.</td>
                <td>Let can be reassigned.</td>
                <td>Const cannot be reassigned.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Js;
