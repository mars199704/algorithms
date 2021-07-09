// array
let arr = ["Mars", "Ming", "Edward"];

// JS for loop
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(i, element);
}

// forEach
arr.forEach((person, index) => {
  console.log(index, person);
});

// object
let Harry = {
  name: "Harry Potter",
  age: 40,
  married: true,
  sayHi() {
    console.log("Hello Harry");
  },
};

console.log(Harry["name"]);
Harry.sayHi();

// function
function add(n1, n2) {
  return n1 + n2;
  // 灰色地帶顯示無法觸及的程式碼
  console.log(n1 + n2);
}
let result = add(10, 15);

console.log(add(5, 17));
console.log(result);

// class
class Circle {
  constructor(radius) {
    this.r = radius;
  }
  getArea() {
    return this.r * this.r * Math.PI;
  }
}

let c1 = new Circle(5);
console.log(c1.r, c1.getArea());

let c2 = new Circle(7);
console.log(c2.r, c2.getArea());
