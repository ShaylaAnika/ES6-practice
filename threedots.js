const ages = [12 , 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 32, 29];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
// console.log(allAges);

//spread operator
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisa = [650, 450, 250, 850];

const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);

