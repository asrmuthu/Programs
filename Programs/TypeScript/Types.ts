let a:number;

let b:string;

let c:boolean;

//You can assign anything to it, and assign it to anything else
let d: any = "hello";
    d = 42;
    d.toUpperCase(); // ✅ No error, even if value is a number

//You can assign anything to it, but must check before using
let e: unknown = "hello";
    // Error: Object is of type 'unknown'
    // value.toUpperCase(); ❌
    if (typeof e === "string") {
    console.log(e.toUpperCase()); // ✅ Safe
    }

let f:undefined; //Something is missing or not yet defined

let g:null; //Something is explicitly set to nothing

let h: number[] = [1, 2, 3]; //Array of numbers

let i: any[] = [1, 'a', true]; //Array of any type

let j: [number, string] = [1, 'a']; //Tuple with a number and a string

let id: string | number; // Union type: id can be either a string or a number
id = 123;
id = "abc";
