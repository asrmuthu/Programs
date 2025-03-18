const data = [
    { id: 1, name: "B" },
    { id: 4, name: "C" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 2, name: "Q" },
    { id: 3, name: "C" },
    { id: 7, name: "C" }
  ];
  const uniqueData = [...new Map(data.map((item) => [item.id, item])). values()]
  console.log(uniqueData);

/* [
  { "id": 1, "name": "B" },
  { "id": 4, "name": "C" },
  { "id": 2, "name": "Q" },
  { "id": 3, "name": "C" },
  { "id": 7, "name": "C" }
]
*/
  