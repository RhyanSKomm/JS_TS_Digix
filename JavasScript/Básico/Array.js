const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array[6]);

console.log(array[0]);
array[0] = 10;

array.push(11);
array.pop();
array.shift();
array.unshift(0);
array.splice(2, 0, 3);