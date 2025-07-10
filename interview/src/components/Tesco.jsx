import React, { useState } from "react";

const Tesco = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [product, setProduct] = useState([]);
  const [totalText1, setTotalText1] = useState(0);
  const [totalText2, setTotalText2] = useState(0);

  const handleAddProduct = () => {
    const num1 = parseFloat(text1) || 0;
    const num2 = parseFloat(text2) || 0;

    const newProduct = { text1: num1, text2: num2 };
    setProduct([...product, newProduct]);

    setTotalText1((prev) => prev + num1);
    setTotalText2((prev) => prev + num2);

    setText1("");
    setText2("");
  };

  const handleProductChange = (index, field, value) => {
    const updatedProduct = [...product];
    const oldVal = parseFloat(updatedProduct[index][field]) || 0;
    const newVal = parseFloat(value) || 0;

    // Adjust totals
    if (field === "text1") {
      setTotalText1((prev) => prev - oldVal + newVal);
    } else if (field === "text2") {
      setTotalText2((prev) => prev - oldVal + newVal);
    }

    updatedProduct[index][field] = newVal;
    setProduct(updatedProduct);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product1</th>
            <th>Product2</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="Text1"
              />
            </td>
            <td>
              <input
                type="text"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder="Text2"
              />
            </td>
            <td>
              <button onClick={handleAddProduct}>Add Product</button>
            </td>
          </tr>

          {product.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.text1}
                  onChange={(e) =>
                    handleProductChange(index, "text1", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.text2}
                  onChange={(e) =>
                    handleProductChange(index, "text2", e.target.value)
                  }
                />
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <p>Total Products: {product.length}</p>
        <p>Total of Text1: {totalText1}</p>
        <p>Total of Text2: {totalText2}</p>
        <p>Total Profit: {totalText1 + totalText2}</p>
      </div>
    </div>
  );
};

export default Tesco;
