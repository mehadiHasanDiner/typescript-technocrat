{
  // ternary operator || optional chaining || nullish coalescing
  
  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? " adult" : " not Adult";
  //   console.log({ isAdult });

  //   nullish coalescing operator

  //   null and undefined এর উপর সিদ্ধান্ত  make করতে আমরা nullish coalescing operator ব্যবহার করি।
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  //   console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John",
    address: {
      city: "San Francisco",
      road: "Mountain View",
      presentAddress: "San Francisco",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No address available";
  console.log({ permanentAddress });
}
// npm i -g ts-node-dev
// ts-node-dev --respawn --transpile-only ./module1/src/1.11.ts
