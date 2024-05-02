// How to write object in typescript
// Reference type => Object;

const userIn3Name: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "John",
  middleName: "Smith",
  lastName: "Robert",
};

// middle name থাকতেও পারে আবার নাও খাকতে পারে। Optional type
// কোনো একটা প্রোপাটির ভেল্যুকে ফিক্সড রাখতে স্ট্রিংটাকেই টাইপ হিসেবে ডিক্লেয়ার করা হয়, এটাকে বলে literal type
// Readonly property => এই প্রোপাটির ডাটা কখন চেঞ্জ বা মডিফাই করা যাবে না।
const userIn2Name: {
  readonly slogan: string; 
  companyName: "Programming Hero"; // type => literal type
  firstName: string;
  middleName?: string; //Optional type (থাকলে string হবে না থাকলে undefined হবে।)
  lastName: string;
  isMarried: boolean;
} = {
  slogan: "let's code your carer",
  companyName: "Programming Hero",
  firstName: "Janker",
  lastName: "Mahbub",
  isMarried: true,
};

//userIn2Name.slogan = "hello world" //it is not possible to asign a slogan