{
  //

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    // constructor-এ public লিখে দিলে  this.name = name এবং class Animal {name: string;} লেখার প্রয়োজন হয় না।

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
    // object oriented normal ফাংশন ইউজ করতে হবে। কারণ, Arrow Function-এ this কাজ করে না।
  }

  const dog = new Animal("German Shephared vai", "dog", "Gew Gew");
  const cat = new Animal("Persian cat vai", "cat", "meaw meaw");

  dog.makeSound();

  //
}
