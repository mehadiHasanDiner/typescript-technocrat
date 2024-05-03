{
  //
  // generic type

  // type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>; //[for industry standard types we use T, T for Type]

  // const rollNumber:number[]= [3,4,5,6,7,];
  const rollNumber: GenericArray<number> = [3, 4, 5, 6, 7];

  // const mentors: string[] = ["Mr.x", "Mr.y", "Mr.z"];
  const mentors: GenericArray<string> = ["Mr.x", "Mr.y", "Mr.z"];

  // const boolArray: boolean[] = [true, false, false];
  const boolArray: GenericArray<boolean> = [true, false, false];

  // Generic Object declaration
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Monica",
      age: 24,
    },
  ];

  interface User {
    name: string;
    age: number;
  }

  //for simplifying Generic Object declaration
  const user1: GenericArray<User> = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Monica",
      age: 24,
    },
  ];

  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["John", "Monica"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "John", email: "John@example.com" },
  ];

  //
}
