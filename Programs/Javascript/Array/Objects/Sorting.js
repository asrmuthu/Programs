const data = [
    { "id": 1, "name": "B" },
    { "id": 4, "name": "C" },
    { "id": 2, "name": "Q" },
    { "id": 3, "name": "C" },
    { "id": 7, "name": "C" }
  ]
  // Sort by ID
  data.sort((a, b) => a.id - b.id);
  console.log(uniqueData);

/* [
  { "id": 1, "name": "B" },
  { "id": 2, "name": "Q" },
  { "id": 3, "name": "C" },
  { "id": 4, "name": "C" },
  { "id": 7, "name": "C" }
]
*/