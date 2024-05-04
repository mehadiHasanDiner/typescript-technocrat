{
  // conditional type
  // টাইপস্ক্রিপ্টে কোন একটা টাইপের মান যখন অন্য একটা টাইপের উপর নির্ভর করে কোনে একটা কন্ডিশনের উপর ভিত্তি করে সেটাই conditional type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; //এখানে, x হচ্ছে conditional type

  // nested conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Shikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //   keyof Shikh "bike" or "car" or "ship"

  //   car aase kina/ bike ase kina/ ship kina/ tractor asche kina
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Shikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
  type HasTruck = CheckVehicle<"truck">;
  type HasPlane = CheckVehicle<"plane">;
}
