{
  // generic constraint with keyof Operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;
  //   এখানে Owner এবং Owner2 একই জিনিস।

  //   const person1 : Owner2 = ""

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. persian",
    age: 18,
    address: "ctg",
  };

  const car = {
    modal: "Toyta 100",
    year: 2000,
  };

  const result1 = getPropertyValue(user, "emni");

  //   user["age"] 26
}
