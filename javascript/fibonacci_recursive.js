function fibonacci(n) {
  // type your code here
  let fibo = [0,1];
  // console.log(fibo[n])
  while(fibo.length <= n){  
    let next = fibo[fibo.length -1]+fibo[fibo.length -2]
    // console.log(next)
    // console.log(fibo)
    fibo.push(next)
    // console.log(fibo)
  }
  console.log(fibo[n])
  return fibo[n]
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
