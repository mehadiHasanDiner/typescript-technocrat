{
  // mapped type
  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     [key in keyof AreaNumber]: boolean; // এখানে key in এবং keyof আলাদা
  //     //  key in এখানে লুপের মতো কাজ করছে।
  //     // keyof AreaNumber হচ্ছে type AreaNumber কে রিপ্রেজেন্ট করছে।
  //   };

  // T = {height:string; width:number}
  type Height = AreaNumber["height"]; //look up type
  // key =>T["width"] //look up type

  type AreaString<T> = {
    [key in keyof T]: T[key]; // এখানে key in এবং keyof আলাদা
    //  key in এখানে লুপের মতো কাজ করছে।
    // keyof AreaNumber হচ্ছে type AreaNumber কে রিপ্রেজেন্ট করছে।
  };
  
  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //   mapped type Generic use
}
