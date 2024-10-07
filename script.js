// // const canvas = document.getElementById("abc");
// // const btn = document.querySelector("button");
// // const ctx = canvas.getContext("2d");

// // let WIDTH = document.documentElement.clientWidth;
// // let HEIGHT = document.documentElement.clientHeight;

// // canvas.width = WIDTH;
// // canvas.height = HEIGHT;

// // function random(number) {
// //   return Math.floor(Math.random() * number);
// // }

// // function draw() {
// //   ctx.clearRect(0, 0, WIDTH, HEIGHT);
// //   for (let i = 0; i < 100; i++) {
// //     ctx.beginPath();
// //     ctx.fillStyle = "rgba(255,0,0,0.5)";
// //     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
// //     ctx.fill();
// //   }
// // }

// // btn.addEventListener("click", draw);
// // const myNumber = Math.ceil(Math.random());
// // console.log(myNumber);

// // let num = prompt("enter a number");
// // // if (num % 5 == 0) {
// // //   console.log("the numbere is the multiple of 5");
// // // } else {
// // //   console.log("the is not the multiple of 5");
// // // }
// // let result =
// //   num % 5 == 0
// //     ? "the numbere is the multiple of 5"
// //     : "the numbere is not the multiple of 5";
// // console.log(result);
// // let a = "saeed ullah";
// // let i;
// // for (i = 0; i < 100; i++) {
// //   console.log(i, a);
// // }
// // console.log("loop has ended");

// // sum of n numbers using FOR LOOP

// // let a = 0;
// // let n = prompt("enter a number");
// // for (let i = 1; i <= n; i++) {
// //   a = a + i;
// // }
// // console.log(a);
// // let a = 0;
// // for (let i = 1; i <= 5; i++) {
// //   console.log("i =", i);
// // }

// // WHILE LOOP
// // let i = 11;
// // do {
// //   console.log(i, "zoh");
// //   i++;
// // } while (i <= 10);

// // let j = 11;
// // while (j <= 10) {
// //   console.log("saeed", j);
// //   j++;
// // }

// //FOR OF LOOP
// // let size = 0;
// // let name = "khan khan";
// // for (let a of name) {
// //   console.log(a);
// //   size++;
// // }
// // console.log(size);

// //FOR IN LOOP

// // let student = {
// //   name: "saeed",
// //   age: 32,
// //   gpa: 3.8,
// //   ispass: true,
// // };
// // console.log(student);
// // for (let i in student) {
// //   console.log(i, "-", student[i]);
// // }

// //PRINT ALL EVEN NUMBER FROM 0 TO 100
// // Q1
// // for (let nbr = 0; nbr <= 20; nbr++) {
// //   if (nbr % 2 === 0) {
// //     console.log("even nbrs =", nbr);
// //   }
// // }

// // Q2
// // let myNum = 20;
// // let userNum = prompt("please enter the number");
// // while (myNum != userNum) {
// //   userNum = prompt("enter the number again");
// // }
// // console.log("you have entered the correct number");

// // let a = 0;
// // do {
// //   console.log(a);
// // } while (a < 4);
// // let i = 8;
// // do {
// //   console.log(i); // Output: 0, 1, 2, 3, 4
// //   i++;
// // } while (i < 5);
// // let a = 3;
// // let b = prompt("eneter a number");
// // while (a != b) {
// //   b = prompt("enter the number again.....");
// // }
// // console.log("congratulation you have enter the correct number");

// // STRING IN JAVASCRIPT

// // let string = "saeed khan";
// // console.log(string);
// // console.log(string.length);
// // console.log(string[7]);

// // TEMPLATE LITERAL (a special type of string)

// // let str = `this is a template literal ${1 + 2 * 4}`;
// // console.log(str);

// // let obj = {
// //   name: "saeed ullah",
// //   age: 22,
// //   std: "computer science",
// // };
// // console.log(obj);
// // console.log(
// //   `my name is ${obj.name}. i am ${obj.age} years old and i am the student of ${obj.std}`
// // );

// //  STRING METHOD IN LOWER AND UPPERCASE

// // let str = "saeed ullah";
// // let str1 = str.toUpperCase();
// // let str1 = str.toLowerCase();
// // console.log(str);
// // console.log(str1);

// // STRING METHOD trim

// // let str = "       saeed ullah         ";
// // console.log(str.trim());

// // STRING METHOD slice

// // let str = "saeed ullah khan";
// // console.log(str.slice(7));

// // STRING METHOD CONCAT

// // let str1 = "saeed ";
// // let str2 = "sami";
// // console.log("i am", str1.concat(str2));
// // console.log("i am", str1 + str2);

// // STRING METHOD replace and replaceAll

// // let str = "saeed sami";
// // console.log(str.replace("s", "m"));
// // let str2 = "saeed sami";
// // console.log(str2.replaceAll("s", "m"));

// // STRING METHOD charAt

// // let str = "saeed sami";
// // console.log(str.charAt(4));

// // PRACTICE QUESTION to create a username
// // let name = prompt("enter your name");
// // // let username = "@" + name + name.length;
// // console.log(name.concat("@", name, name.length));

// //        ARRAY IN JS

// // let marks = [33, 45, 66, "saeed", "sami", 88, 35, 97];
// // console.log(marks);
// // console.log(marks.length);

// // let arr = ["saeed", "ali", "saif", "ikram", "saddam", "sameer", "hamza"];
// // for (let i of arr) {
// //   console.log(i);
// // }
// // let arr2 = ["saeed", "ali", "saif", "ikram", "saddam", "sameer", "hamza"];
// // for (let i = 0; i <= arr2.length; i++) {
// //   console.log(arr2[i]);
// // }
// // PRACTICE QUESTION 1
// // let arr = [34, 54, 65, 76, 47, 99, 76, 88, 60];
// // let sum = 0;
// // for (let i of arr) {
// //   sum += i;
// // }
// // console.log(sum);
// // let res = sum / arr.length;
// // console.log(`the average of the entire class is ${Math.floor(res)}`);

// //   PRACTICE QUESTION 2

// // let price = [250, 645, 300, 900, 50];
// // for (let i = 0; i < price.length; i++) {
// //   let offer = price[i] / 10;
// //   price[i] = price[i] - offer;
// // }
// // console.log(price);

// // ARRAY METH0DS

// // PUSH METHOD
// // let price = [250, 645, 300, 900, 50];
// // price.push(50);
// // console.log(price);

// // // POP METHOD
// // let price = [250, 645, 300, 900, 50];
// // let del = price.pop();
// // console.log(price);
// // console.log(del);

// // toString method
// // let price = [250, 645, 300, 900, 50];
// // console.log(price.toString());

// // concat METHOD
// // let price = [250, 645, 300, 900, 50];
// // let name = ["saeed", "ikram", "tahir", "umar"];
// // let newarr = price.concat(name);
// // console.log(newarr);

// // unshift METHOD(it is same like push method but it add the item at the start)
// // let price = [250, 645, 300, 900, 50];
// // price.unshift(21);
// // console.log(price);

// //shift METHOD (it is same like pop method but it delete the item from the start)
// // let price = [250, 645, 300, 700, 50];
// // console.log(price.shift());
// // console.log(price);

// //  SLICE METHOD (doesnot change the original array )
// // let price = [250, 645, 300, 700, 50];
// // console.log(price.slice(1, 3));
// // console.log(price);

// // // SPLICE METHOD ( change the original array )
// // let price2 = [250, 645, 300, 700, 50];
// // console.log(price2.splice(1, 0, 200, 30, 400));
// // console.log(price2);

// // ARRAY PRACTICE QUESTIONS 1
// // let name = ["saeed", "ikram", "tahir", "umar", "irfan"];
// // name.shift();
// // console.log(name);
// // name.splice(2, 1, "saif");
// // console.log(name);
// // console.log(name);
// // name.push("zabar");

// // FUNCTION IN JAVASCRIPT
// // function myFunction1() {
// //   console.log("welcome");
// // }
// // myFunction1();

// // function myFunction2(msg, n) {
// //   // msg and n are the parameter
// //   console.log(msg, n);
// // }
// // myFunction2("i love js", 12); // "i love js", 12 are the arguments

// // function sum(a, b) {
// //   s = a + b;
// //   console.log("before");
// //   return s;
// //   console.log("after");
// // }
// // let c = sum(3, 2);
// // console.log(c);

// // function add(a, b) {
// //   return a + b;
// // }
// // let a = add(2, 3);
// // console.log(a);

// // const ad = (a, b) => {
// //   return a + b;
// // };
// // let d = ad(1, 1);
// // console.log(d);

// // function mul(a, b) {
// //   return a * b;
// // }
// // let b = mul(2, 3);
// // console.log(b);

// // const mul1 = (a, b) => {
// //   return a * b;
// // };

// // const pri = () => {
// //   return "print";
// // };
// // let s = pri();
// // console.log(s);

// // PRACTICE QUESTIONS
// //  function
// // function vowel(str) {
// //   let count = 0;
// //   for (let char of str) {
// //     if (
// //       char === "a" ||
// //       char === "e" ||
// //       char === "i" ||
// //       char === "o" ||
// //       char === ""
// //     )
// //       count++;
// //   }
// //   console.log(count);
// // }
// // let res = vowel("saeedsami");
// // console.log(res);

// // // same example with arrow function
// // const vowel2 = (str) => {
// //   let count = 0;
// //   for (let char of str) {
// //     if (
// //       char === "a" ||
// //       char === "e" ||
// //       char === "i" ||
// //       char === "o" ||
// //       char === ""
// //     )
// //       count++;
// //   }
// //   console.log(count);
// // };
// // let res2 = vowel("saeed khan");
// // console.log(res2);

// // FOR EACH EXAMPLE IN FUNCTION
// let name = ["saeed", "zohaib", "ali", "sadiq"];
// name.forEach(function (val) {
//   console.log(val);
// });

// // FOR EACH EXAMPLE IN ARROW FUNCTION
// name.forEach((val1) => {
//   console.log(val1);
// });

// // FOR EACH EXAMPLE FOR LOOP
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (n in name) {
//   console.log(n);
// }

// let obj = {
//   name: "saeed",
//   age: 22,
//   student: "computer science",
// };
// for (let n in obj) {
//   console.log(
//     `my name is ${name} my age is ${age} and i am the student of ${student}`
//   );
// }

// function aboutStudent(student) {
//   let s = `good student of age ${student.age} with name ${student.name} of class ${student.class}`;
//   return s;
// }
// const registry = [
//   {
//     name: "zoahib",
//     age: 23,
//     class: "4th",
//     prev_nbr: [12, 34, 5, 35, 75],
//     about: aboutStudent,
//   },
//   {
//     name: "saeed",
//     age: 23,
//     class: "6th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
//   {
//     name: "ali",
//     age: 23,
//     class: "5th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
//   {
//     name: "ikram",
//     age: 23,
//     class: "8th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
//   {
//     name: "tahir",
//     age: 23,
//     class: "7th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
// ];
// console.log(registry);
// for (let student of registry) {
//   console.log(student);
//   console.log(student.about(student));
//   for (let prev of student.prev_nbr) {
//     console.log(prev);
//   }
// }

// function aboutStudent(student) {
//   let r = `student name is ${student.age} and his class is ${student.class}`;
//   return r;
// }
// const registry = [
//   {
//     name: "zoahib",
//     age: 23,
//     class: "4th",
//     prev_nbr: [12, 34, 5, 35, 75],
//     about: aboutStudent,
//   },
//   {
//     name: "saeed",
//     age: 23,
//     class: "6th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
//   {
//     name: "ali",
//     age: 23,
//     class: "5th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
//   {
//     name: "ikram",
//     age: 23,
//     class: "8th",
//     prev_nbr: [12, 332, 34, 6, 6],
//     about: aboutStudent,
//   },
// ];
// console.log(registry);
// for (let student of registry) {
//   console.log(student);
//   console.log(
//     student.about({
//       // age: student.age,
//       name: student.name,
//       class: student.class,
//     })
//   );

// }
// const random = () => Math.ceil(Math.random() * 1000 * 100);

// const employee = [
//   [1, "zohaib", [[20000, random()], [30000, random()], [40000]]],
//   [
//     2,
//     "saeed",
//     [
//       [25000, random()],
//       [36000, random()],
//       [42000, random()],
//     ],
//   ],
//   [
//     3,
//     "ali",
//     [
//       [21000, random()],
//       [10000, random()],
//       [50000, random()],
//     ],
//   ],
// ];
// console.log(employee);
// for (let emp of employee) {
//   console.log(emp[0]);
//   console.log(emp[1]);
//   console.log(emp[2]);
// }
// let numbers = [];
// for (let i = 0; i < 64; i++) {
//   numbers.push(i);
// }
// function myFunc(value, i) {
//   console.log(value ** 64);
// }
// numbers.forEach(myFunc);

// wheat and chess board problem

// Initialize the number of squares on a chessboard (64)
// const squares = 64;

// // Initialize an array to hold the grains on each square
// let grainsOnSquare = [];

// // Loop through each square (1 to 64)
// for (let i = 0; i < squares; i++) {
//   // Calculate the number of grains on the current square (2^i)
//   let grains = Math.pow(2, i);

//   // Store the result in the array
//   grainsOnSquare.push(grains);
// }

// // Calculate the total number of grains on all squares
// let totalGrains = grainsOnSquare.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// // Output the result
// console.log("Grains on each square:", grainsOnSquare);
// console.log("Total grains after 64 squares:", totalGrains);

// let num = [2, 3, 4, 5, 6];
// num.forEach((a) => {
//   console.log(a * a);
// });
// let num1 = [1, 2, 3, 4, 5];
// let b = (a) => {
//   console.log(a * a);
// };
// num1.forEach(b);

// let num = [2, 3, 5, 6, 667, 767];
// num.forEach((a) => {
//   console.log(a * a);
// });

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Call greet and pass sayGoodbye as a callback
greet("Saeedullah", sayGoodbye);
