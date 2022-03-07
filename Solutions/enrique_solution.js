function identity(x) {
  return x;
}

function addb(a, b) {
  return a + b;
}

function subb(a, b) {
  return a - b;
}

function mulb(a, b) {
  return a * b;
}

function minb(a, b) {
  return a < b ? a : b;
}

function maxb(a, b) {
  return a > b ? a : b;
}

function add(...nums) {
  return nums.reduce((previous, current) => (
    previous + current
  ));
}

function sub(...nums) {
  return nums.reduce((previous, current) => (
    previous - current
  ));
}

function mul(...nums) {
  return nums.reduce((previous, current) => (
    previous * current
  ));
}

function min(...nums) {
  // return Math.min(...nums); <-- Feels like cheating
  return nums.reduce((previous, current) => (
    previous < current ? previous : current
  ));
}

function max(...nums) {
  return Math.max(...nums);
}

function addRecurse(...nums) {
  if (nums.length === 1) return nums[0];

  const cache = nums; // avoid parameter reasign
  cache[0] += cache.pop(); // pop returns the value

  return addRecurse(...cache);
}

function mulRecurse(...nums) {
  if (nums.length === 1) return nums[0];

  const cache = nums;
  cache[0] *= cache.pop();

  return mulRecurse(...cache);
}

function minRecurse(...nums) {
  if (nums.length === 1) return nums[0];

  const cache = nums[0] < nums[nums.length - 1] ? nums.slice(0, -1) : nums.slice(1);

  return minRecurse(...cache);
}

function maxRecurse(...nums) {
  if (nums.length === 1) return nums[0];

  const cache = nums[0] < nums[nums.length - 1] ? nums.slice(1) : nums.slice(0, -1);

  return maxRecurse(...cache);
}

function not(func) {
  return (...args) => !func(args);
}

function acc(callback, initial) {
  return (...args) => {
    let result = initial;

    args.forEach((arg) => {
      result = callback(result, arg);
    });

    return result;
  };
}

function accPartial(callback, start, end) {
  return (...args) => {
    const head = args.slice(0, start);
    const chunk = args.slice(start, end);
    const tail = args.slice(end);

    let reduced = chunk[0];
    for (let i = 1; i < chunk.length; i += 1) {
      reduced = callback(reduced, chunk[i]);
    }

    return [...head, reduced, ...tail];
  };
}

function accRecurse(callback, initial) {
  const recursion = (...args) => {
    if (args.length === 1) return callback(args[0], initial);

    const cache = args; // avoid parameter reasign

    cache[0] = callback(cache.shift(), cache[0]);
    return recursion(...cache);
  };

  return recursion;
}

function fill(num) {
  // return Array(num).fill(num); <-- Feels like cheating
  const array = [];
  for (let i = 0; i < num; i += 1) {
    array.push(num);
  }

  return array;
}

function fillRecurse(num, arr = []) {
  if (arr.length === num) return arr;

  arr.push(num);
  return fillRecurse(num, arr);
}

function set(...args) {
  // return Array.from(new Set(args)); <-- Feels like cheating
  const res = [];

  args.forEach((arg) => {
    if (!res.includes(arg)) res.push(arg);
  });

  return res;
}

function identityf(arg) {
  return () => arg;
}

function addf(x) {
  return (y) => x + y;
}

function liftf(binary) {
  return (a) => (b) => binary(a, b);
}

// console.log(addf(2)(3));

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
