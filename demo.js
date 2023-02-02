var marks = new Array[40,45,50,60]
for (let i =0;i<marks.length;i++)
{
console.log(marks[i])
}
marks.push(70);
marks.pop()

const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const a3 = a1.concat(a2);
console.log(a3);

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));


const isBelow = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 9, 10, 13];
console.log(array1.every(isBelow));

const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let id = array.indexOf(element);
while (id!== -1) {
  indices.push(id);
  id = array.indexOf(element, id + 1);
}
console.log(indices);

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items);