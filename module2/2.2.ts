{
  //
  // interface
  // type alias এর জাত ভাই হচ্ছে interface

  type User1 = {
    name: string;
    age: number;
  };

  type RollNumber = number;

  //User1- property আরো বাড়াবো type alias এর মাধ্যমে
  type UserWithRole = User1 & { role: string };

  //User1- property আরো বাড়াবো interface এর মাধ্যমে
  interface UserWithRole2 extends User1 {
    role: string;
  }
  // ডিক্লেয়ার করা type-এর প্রোপার্টিকে interface এর মাধ্যমেও extends করা যায়

  const user3: UserWithRole2 = {
    name: "john",
    age: 34,
    role: "manager",
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "John",
    age: 20,
  };

  //   type alias আমার অবজেক্ট এবং প্রিমিটিভ ডাটা টাইপ(স্ট্রি, নাম্বার, বুলিয়ান...) দুই জায়গাই করতে পারি। কিন্তু interface আমার অবজেক্টের ক্ষেত্রে করতে পারি।

  //   interface in Array
  type Roll = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll2 = [1, 2, 3, 4, 5, 6, 7];

  type Add = (num1: number, num2: number) => number;
  //   interface in function
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //   when we will use type alias or interface  (which one is suitable)

  //   Array এর ক্ষেত্রে type alias
  //   function এর ক্ষেত্রেও type alias
  //   object এর ক্ষেত্রে type alias or interface (both but not mixed together)

  //
}
