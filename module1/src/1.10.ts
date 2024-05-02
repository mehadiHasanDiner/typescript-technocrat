// for global accessing problem
{
  //
  //   Union type & Intersection type
  //  In TypeScript: Union type = | (or), Intersection = & (all)
  //  In JavaScript: Or = ||, All = &&

  type FrontendDeveloper = "fakibazDev" | "juniorDev";
  type FullStackDeveloper = "frontendDev" | "expertDev";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+" | "AB-";
  };

  const user1: User = {
    name: "mehadi",
    gender: "male",
    bloodGroup: "B+",
  };

  //   Intersection type (&)
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDev = FrontendDev & BackendDev;
  const fullStackDev: FullStackDev = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
