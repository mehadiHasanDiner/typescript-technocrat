{
  //
  // oop - inheritance
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    // class এবং মেথড getSleep() উত্তরাদিকার সূত্রে Parent থেকে চাইল্ড অর্থাৎ Student পাবে। তাই Student এর মধ্যে এগুলো ডিক্লেয়ার না করলেও হবে।
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
      //   child থেকে Parent এর মাধ্যম হয়ে ভেলু গুলোকে পাঠাচ্ছি তাই এখানে super() কল করতে হবে। এবং super(name, age, address) এর মধ্যে super(name, age, address)-এই ভেলুগুলোকে দিয়ে দিয়েছি।;
    }
  }

  const student1 = new Student("Mr.X", 20, "United States");
  student1.getSleep(20);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class`);
    }
  }

  const teacher1 = new Teacher("Mr.Teacher", 40, "United States", "Professor");
  teacher1.takeClass(20);

  //
}
