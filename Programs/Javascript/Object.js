let students =[
  {name:"Smith",rollNumber:31,marks:80},
  {name:"Jenny",rollNumber:15,marks:69},
  {name:"John",rollNumber:16,marks:35},
  {name:"Tiger",rollNumber:7,marks:55}
];

//Only display the row name = "Smith"
let smithRow = students.filter(item => item.name === "Smith");
console.log(smithRow)  //[ { name: 'Smith', rollNumber: 31, marks: 80 } ]

//Only display name column
let nameCol = students.map(({name, ...rest}) => ({name}))
console.log(nameCol)
/* [
  { name: 'Smith' },
  { name: 'Jenny' },
  { name: 'John' },
  { name: 'Tiger' }
]*/

//list of marks(one row values)
let marksList = students.map(item => item.marks) 
console.log(marksList) //[ 80, 69, 35, 55 ]

//specific value change(Smith to Muthu)
let nameChange = students.map(item => item.name === 'Smith' ? ({...item, name: 'Muthu'}) : item).filter(item => item.name === 'Muthu')
console.log(nameChange) // [ { name: 'Muthu', rollNumber: 31, marks: 80 } ]

//one heading value change(name to fname)
let colNameChange = students.map(({ name, ...rest }) => ({fName: name, ...rest}));
console.log(colNameChange)
/* [
  { fName: 'Smith', rollNumber: 31, marks: 80 },
  { fName: 'Jenny', rollNumber: 15, marks: 69 },
  { fName: 'John', rollNumber: 16, marks: 35 },
  { fName: 'Tiger', rollNumber: 7, marks: 55 }
] */

//one row delete (rollNumber = 31 -> row delete)
let del = students.filter((item) => item.rollNumber !== 31)
console.log(del)
/* [
  { name: 'Jenny', rollNumber: 15, marks: 69 },
  { name: 'John', ollNumber: 16, marks: 35 },
  { name: 'Tiger', rollNumber: 7, marks: 55 }
] */
