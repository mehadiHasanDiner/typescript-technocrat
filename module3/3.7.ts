{
  // static
  class Counter {
    static count: number = 0;
    //  এখানে method কেও static ‍করা হয়েছে।
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //dynamic
  // class Counter {
  //   count: number = 0;
  //   increment() {
  //     return (this.count = this.count + 1);
  //   }
  //   decrement() {
  //     return (this.count = this.count - 1);
  //   }
  // }

  // এখানে dynamically কল হচ্ছে এবং মান সবসময় শুরু থেকে আসছে। যদি আমরা static করতে পারি তাহলে একটা সিঙ্গেল সোর্স থেকে মান আসবে আলাদা আলাদ মান শুরু থেকে আসবে না।
  const instance1 = new Counter();
  console.log(instance1.increment()); //1 --> different memory

  // যেহেতু মেথডকে স্টাটিক করা হয়েছে। তাই এটার মাধ্যে আর instance1 নেই। তাই এটা অন্যভাবে কল করতে হবে।
  // const instance2 = new Counter();
  console.log(Counter.increment()); //1 --> different memory

  // const instance3 = new Counter();
  console.log(Counter.increment()); //1 --> different memory
  //
}