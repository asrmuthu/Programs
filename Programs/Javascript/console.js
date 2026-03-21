Promise.resolve().then(function(){
 console.log('Promise1 with resolve')
 setTimeout(function b() {
         console.log("setTimeout Promise")
},0)
})


Promise.resolve().then(() => {
  console.log("P1");
  Promise.resolve().then(() => console.log("P2"));
});


Promise.resolve().then(() => {
  console.log("A");
  queueMicrotask(() => console.log("B"));
});




Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T1"), 0);
});


setTimeout(() => {
  console.log("T2");
  Promise.resolve().then(() => console.log("P2"));
}, 0);




setTimeout(function(){
   console.log('setTimeout With timer 0')
}, 0)


setTimeout(function(){
   console.log('setTimeout With timer 1000')
}, 1000)


setTimeout(() => console.log("setTimeout Without timer"));


async function async1() {
  console.log('Async1 function start');
  await async2();
  console.log('Async1 function End');
}
 
async function async2() {
  console.log('Async2 function');
}
async1();




new Promise((resolve, reject) => {
  console.log("Promise2 without resolve");
  resolve("Promise2 with Resolved");
}).then(res => console.log(res));


queueMicrotask(() => console.log("microtask"));


function test() {
  console.log('normal function');
}
test();


let a = 20;


console.log(a)


console.log('Normal console');