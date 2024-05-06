{
  //
  //   instanceof Guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawwing");
    }
  }

  //  স্মার্ট ওয়েতে হ্যান্ডেল করার জন্য চাইলে আমরা ফাংশন ব্যবহার করতে পারি।
  const isDog = (animal: Animal): animal is Dog => {
    // এখানে boolean রিটার্ন করে boolean এর পরিবর্তে animal is Dog NB: এটাও একটি boolean
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    // এখানে boolean রিটার্ন করে boolean এর পরিবর্তে animal is Cat, NB: এটাও একটি boolean

    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // এখানে ‍ৃ animal = dog or cat এর নিজস্ব মেথড ব্যবহার করা যাচ্ছে না। কারন animal বুঝতে পারছে না এটা কোন ক্লাসের মেথড বা প্রোপাটি এজন্য if(animal instanceof Dog) তখন Dog এর নিজস্ব মেথড ব্যবহার করা যাচ্ছে।
    // animal.makeBark()
    if (isDog(animal)) {
      // এখানে animal instanceof Dog এর পরিবর্তে isDog(animal) লেখা হয়েছে।
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(cat);

  //
}
