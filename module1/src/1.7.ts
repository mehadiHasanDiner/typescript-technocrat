{
  //spread operator
  //rest operator
  //destructuring

  //learn: spread operator

  const bros1: string[] = ["Mr.a", "Mr.b", "Mr.c", "Mr.d"];
  const bros2: string[] = ["Mr.e", "Mr.f", "Mr.g", "Mr.h"];

  console.log(bros1.push(...bros2));

  const mentors1 = {
    typescript: "Abir",
    redux: "Jabir",
    dbms: "Nabir",
  };

  const mentors2 = {
    prisma: "Kabila",
    next: "Khabila",
    cloud: "Jabila",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  //learn rest operator

  //   const greetFriends = (friend: string[], friend2: string[]) => {
  //     console.log(`Hi $(friend1) ${friend2} ${friend3}`);
  //   };

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi $(friend1) ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Kabul", "Dabul", "Mali", "Jali");
}
