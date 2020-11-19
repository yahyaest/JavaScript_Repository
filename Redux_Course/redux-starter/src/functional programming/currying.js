// N => 1 : Convert N argument to 1

function add(a) {
 return function (b) {
  return a + b;
 }
}

const add2 = a => b => a + b; // replace (a, b) => a + b

add2(1)(5) // replace add(1, 5)