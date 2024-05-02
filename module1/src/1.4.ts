// Basic Data type
// typeScript দুই ধরনের ডাটা টাইপ। যদি টাইপ বলে দেওয়া না হয় তাহলে typeScript নিজে নিজেই কোনো কোনো টাইপ চিনে নেয় সেটাকে বলে implicit data type আর যেগুলোতে ডাটা টাইপ বলে দেওয়া হয়, সেগুলো explicit data type

// string
const firstName: string = "Mehadi Hasan";
// number
const roll: number = 1;
// boolean
const inAdmin: boolean = false;
// undefined
let x: undefined = undefined;
// null
let y: undefined = undefined;

let d: number = 0;

let friends: string[] = ["Pnony", "Mozilla", "Mac OS X"];
let selectedRoll: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// tuple => array => order => type of value
let tuple: [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let age: [number, string, boolean] = [50, "Moni", false];

age[1] = "Jony";
