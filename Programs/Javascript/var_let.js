function fn1(){
    for(var i= 0; i< 5; i++){
        console.log(i);
    }
    console.log("Outside loop with var:", i); // i is accessible here
}
fn1()