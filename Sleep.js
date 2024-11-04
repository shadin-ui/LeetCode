function sleep(millis) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(millis), millis);
    });
  }
  
  sleep(100).then(() => {
    console.log("Finished after 100 milliseconds");
  });
  