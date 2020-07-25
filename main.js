for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbizz");
  } else if (i % 5 === 0) {
    console.log("bizz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
