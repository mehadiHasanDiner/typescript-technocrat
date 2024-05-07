{
  // abstract
  // abstraction এমন একটা পদ্ধতি যার দ্বারা আমরা একটা আইডিয়া করে কিছু তৈরি করতে পারব, কিন্তু রিয়েল ইম্পিলিমেন্ট কিভাবে হচ্ছে, তা আমরা জানব না।

  // abstraction দুই ভাবে করা যায় ১.interface ২.abstract class ব্যবহার করে।

  //   interface Vehicle1{
  //     name: string;
  //     model: number;
  //   }

  //   এখানে idea পাচ্ছি
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 20000,
  //   }

  //   এখানে real implimentation পাচ্ছি
  class Car1 implements Vehicle1 {
    // এখানে :(কোলন দিয়ে Vehicle1 দেওয়া যাবে না কারণ এটা class যদি interface এর সেপ ব্যবহার করতে হয় তবে implements Vehicle1 দিতে হবে।)

    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // কিভাবে abstracted class তৈরি করে abstraction তৈরি করতে পারি।
  // abstracted class --> অথবা leader class। যে ক্লাসকে বাকি ক্লাসগুলো ফলো করবে। সেরকম একটা ্ক্লাস বানাতে হবে।

  // idea
  abstract class Car2 {
    // যখন abstract class তৈরি করা শুরু করেছি তখনই class-এর আগে abstract লিখেছি।
    abstract startEngine(): void;
    // এখানে .. দিচ্ছি কি হইতে পারে কিন্তু কি হবে সেটা বলছি না এজন্য console.log(`I am stopping the car engine`); বাদ দিয়ে দিচ্ছি।
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
  }

  // const hondaCar = new Car2();

  // const hondaCar = new Car2(); এখানে একটা ইরর দিচ্ছে, এর মানে হচ্ছে abstract class কে ফলো করা যাবে, তার গুনাবলি নেওয়া যাবে কিন্তু তার থেকে তৈরি হওয়া যাবে না। ফলো করানোর জন্য আমাদেরকে একটা চাইল্ড ক্লাস তৈরি করতে হবে।

  // hondaCar.startEngine();

  //
}
