//month value
//const month = 8;

// if (month === 12 || month === 1 || month === 2) {
//   statement = 'It is winter.  Wear a jacket because it is cold now.';
// } else if (month === 3 || month === 4 || month === 5) {
//   statement = 'Springtime and windy.  Put on a sweater.';
// } else if (month === 6 || month === 7 || month === 8) {
//   statement = 'Summer so will wear shorts and a tee shirt';
// } else if (month === 9 || month === 10 || month === 11) {
//   statement = 'Fall so a light jacket and scarf.';
// } else {
//   statement = 'Going to not wear clothes';
// }

// console.log(statement);

//even and odd number challenge

// const x = 24;

// if (x === 0) {
//   console.log(x + ' is even');
// } else if (x % 2 === 0) {
//   console.log(x + ' is even');
// } else {
//   console.log(x + ' is odd');
// }

// 3 number challenge

// three random variable numbers
const x = 4;
const y = 9;
const z = 100;

//If third number is inside the first two log ‘inside’
if (z > x && z > y) {
  console.log(`${z} is greater than ${x} or ${y} outside `);
  //third number is inside the first two log ‘inside'
} else if (z < x && z < y) {
  console.log(`${z} is less than ${x} or ${y} inside`);
  //3rd number is inbetween/middle
} else if (z < x && z > y) {
  console.log(`${z} is inbetween ${x} and ${y} middle`);
  //3rd number is inbetween/middle
} else if (z > x && z < y) {
  console.log(`${z} is inbetween ${x} and ${y} middle`);
  //3rd number equal to 1st number
} else if (z === x) {
  console.log(`${z} is equal to ${x} 1st number`);
  //3rd number equal to 2nd number
} else if (z === y) {
  console.log(`${z} is equal to ${y} 2nd number `);
  //no real value is used
} else {
  console.log(`Not real`);
}
