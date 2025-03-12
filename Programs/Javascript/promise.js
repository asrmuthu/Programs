const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("✅ Task completed!");
      } else {
        reject("❌ Task failed!");
      }
    }, 2000);
  });
  
  console.log(myPromise);
  