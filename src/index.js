module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split(" ");
  var a = parseInt(arr[0]);
  var b = parseInt(arr[3] + arr[4]);
  var c = parseInt(arr[7] + arr[8]);

  var result = [];

  var b2 = b / 2;
  var sqD1 = Math.sqrt(b2 * b2 - a * c);
  result[0] = Math.round((-b2 + sqD1) / a);
  result[1] = Math.round((-b2 - sqD1) / a);
  
  result.sort((a,b) => (a - b));
  return result;
}
