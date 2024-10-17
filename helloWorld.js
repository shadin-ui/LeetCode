function createHelloWorld() {
    function i() {
      return "Hello World";
    }
    return i;
  }
  const f = createHelloWorld();
  console.log(f());
  console.log(f({}, null, 42));
  