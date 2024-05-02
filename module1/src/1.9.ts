{
  // Types Alias

  //   Object -এ type ডিক্লেয়ার করার নিয়ম
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Mezba",
    age: 28,
    gender: "Male",
    contactNo: "012343434",
    address: "ctg",
  }; // এভাবে না লিখে এভাবে type ডিক্লেয়ার করার মাধ্যমে লেখা হয়
  const student3: Student = {
    name: "Mezba",
    age: 28,
    gender: "Male",
    contactNo: "012343434",
    address: "ctg",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
    address: string;
  } = {
    name: "Mir",
    age: 28,
    gender: "Male",
    address: "dha",
  }; // এভাবে না লিখে এভাবে type ডিক্লেয়ার করার মাধ্যমে লেখা হয়
  const student4: Student = {
    name: "Mir",
    age: 28,
    gender: "Male",
    address: "dha",
  };

  const student5: Student = {
    name: "Hasan",
    age: 34,
    gender: "Female",
    address: "dha",
  };

  //শুধু Object-এর ক্ষেত্রেই না Type Alias String-এর ক্ষেত্রেও ডিক্লেয়ার করা যায়।
  type UserName = string;
  const userName: UserName = "Persian";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  //function-এর ক্ষেত্রে Type Alias declaration
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
