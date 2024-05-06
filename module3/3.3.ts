{
  //
  //type checking -এর ক্ষেত্রে টাইপকে গার্ড দিয়ে চেক করা হয় এটা কি স্ট্রিং নাকি নাম্বার, বুলিয়ান। একেই বলে টাইপ গার্ড।
  //   type Guard - ফাংশনাল প্রোগ্রামিং এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং দুই যায়গাই ব্যবহার করা যায়।

  // typeof --> অপারেটর কিভাবে type guard হিসেবে কাজ করে।

  type AlphaNumeric = string | number;

  const add = (
    param1: AlphaNumeric,
    param2: AlphaNumeric
  ): AlphaNumeric | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add("3", "6");
  console.log(result);

  //   in-guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      // এখানে (in) গার্ড ইউজ করা হয়েছে। in ব্যবহার করায় রোল সে identify করতে পারছে
      console.log(`My name is  ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} `);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. normal brother",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };

  getUser(adminUser);

  //
}
