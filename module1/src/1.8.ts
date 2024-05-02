//destructing
const user = {
  id: 3453,
  name: {
    firstName: "John",
    middleName: "pone",
    lastName: "Mone",
  },
  contact: "012343434534",
};

// const { contact } = user;
// const {
//   contact,
//   name: { middleNam },
// } = user;

const {
  contact,
  name: { middleName: midName }, //data elias
} = user;

// object destructuring এর সময় কখনই টাইপস্ক্রিপ্টে  ‍:type (:string, :number) লিখতে হয় না। লিখলে ডাটা এলিয়াস হয়ে প্রোপার্টির নাম চেঞ্জ হয়ে যায়।

//array destructuring
const myFriends = ["mobin", "phobin", "sobin", "Gobin", "Bebin"];

// const [a, b, c] = myFriends;

// const [a, b, bestFriend] = myFriends;

const [, , bestFriend, ...rest] = myFriends;

// এখানে sobin হচ্ছে bestFriend ।
