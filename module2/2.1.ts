{
  //
  // type assertion
  let anything: any;

  anything = "Next level web development";
  anything = 222;

  anything as number;

  const kgToGrm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGrm(1000) as number;
  const result2 = kgToGrm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  // যখন আমরা পুরোপুরি সিউর যে এটার টাইপ এটাই হবে অর্থাৎ স্ট্রি, নাম্বার নাকি বুলিয়ান তখন আমরা type assertion ব্যবহার করব। type assertion ব্যবহার করলে টাইপস্ক্রিপ্ট আমাদের উপর পুরোপুরি অগাধ বিশ্বাস স্থাপন করে আমাদের ধারণা করা টাইপের উপর

  //
}
