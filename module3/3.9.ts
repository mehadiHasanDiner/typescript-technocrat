{
  // abstraction
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
  class Car implements Vehicle1 {
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
  //
}
