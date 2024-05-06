{
  // utility types

  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //   কোনো একটা টাইপ থেকে একটা প্রোপার্টির existing type তুলে নিয়ে আসতে আমরা Pick use করি।

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //   Omit
  //   কোনো একটা টাইপ থেকে যেকোনো প্রোপার্টির বাদে দিতে আমার Omit করি।

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  //   একটা টাইপের সবগুলো প্রোপার্টি রিকুয়ার  হবে সেক্ষেত্রে আমরা Require use করি।
  type PersonRequired = Required<Person>;

  //   Partial
  // একটা টাইপের সবগুলো প্রোপার্টিকে Partial করে দিবে সেক্ষেত্রে Partial use আমরা করি ।
  type PersonPartial = Partial<Person>;

  //   Readonly (সবগুলো প্রপাটি কে readonly করে দেয়)
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "John",
    age: 16,
    contactNo: "0132",
    email: "john@gmail.com",
  };
  person1.name = "John";

  //   Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  //   MyObj এভাবে অনেক সময় টাইপ ডিক্লেয়ার না করে টাইপের রেকর্ড রেখে টাইপটাকে ডাইনামিকভাবে ইউজ করা যায়। এটাকে রেকর্ড বলে।
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //   type MyObj = Record<string, string>;
  // এখানে <string, string> যদি চেঞ্জ করে নাম্বার দেওয়া হয় তবে এরর দিবে। তখন অবজেক্টের প্রপাটিকেও চেঞ্জ করতে হবে।

  const EmptyObj: Record<string, unknown> = {};
}
