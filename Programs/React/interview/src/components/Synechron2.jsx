import React from "react";

const Synechron2 = () => {
  const arr1 = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
  const arr2 = [{ id: 2, name: "B", job: "Doctor" }, { id: 3, name: "C" }];

  // Merge arrays and remove duplicates by `id`
  const mergedArray = [...arr1, ...arr2]
  
  const mm = mergedArray.reduce((acc, obj) => {
    const existing = acc.find((item) => item.id === obj.id);
    if (existing) {
      Object.assign(existing, obj); // Merge properties if `id` already exists
    } else {
      acc.push(obj);
    }
    return acc;
  }, []);

  return (
    <div>
      <h3>Merged Array (No Duplicates):</h3>
      <ul>
        {mm.map((user) => (
          <li key={user.id}>
            {user.name} {user.job ? `- ${user.job}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Synechron2;
