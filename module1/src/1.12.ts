{
  //nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  //   searchName("person");
  //   searchName(null);

  //unknown type (for checking in runtime )
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      //   const valueInNumber = value.split(" ");
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input value");
    }
  };
  //   getSpeedInMeterPerSecond(1000);
  //   getSpeedInMeterPerSecond(`1000 kmh^-1`);
  getSpeedInMeterPerSecond(null);

  //   never type
  // const throwError: (msg: string) => never;
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("error happened");

  // এই ইরর জীবনে কোনোদিন return দিবে না তাই এটা never type
  //   যদি আমরা সিউর হই যে সে  জীবনে কোনো দিন কোনোকিছু রিটার্ন করবে সেক্ষেত্রে ্আমরা ইউজ করতে পারি never type
}
