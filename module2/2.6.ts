{
  //constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  //   T extends { id: number; name: string; email: string } এখানে ইনফোর্স করা হচ্ছে id, name, email যেন সবগুলো জেনেরিকের স্টুডেন্ট প্যারামিটারের সাথে থাকে।

  //   const student4 = addCourseToStudent({ emni: "emni" });

  const student3 = addCourseToStudent({
    id: 223,
    name: "mr.z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr.X",
    email: "mr.x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr.Y",
    email: "mr.y@gmail.com",
    devType: "Apple Watch",
  });

  //
}
