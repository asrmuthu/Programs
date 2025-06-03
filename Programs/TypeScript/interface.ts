interface Point {
    x: number;
    y: string;
    z?: number; // Optional property
}

let p1 = (point:Point) => {
    console.log(point.x, point.y, point.z);
}

p1({x: 10, y: "20"}); // z is optional, so it can be omitted

let p2: Point = {
    x: 10,
    y: "20",
    z: 30 // Optional property can be included
};

interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  
  const pet: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
  };    

  interface User {
    readonly id: number;
    name: string;
  }
  
  const user: User = { id: 1, name: "Tom" };
  // user.id = 2; ❌ Error: Cannot assign to 'id' because it is a read-only property.