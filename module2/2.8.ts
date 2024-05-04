{
  // promise:boolean
  //   const createPromise = (): Promise<boolean> => {
  //     return new Promise<boolean>((resolve, reject) => {
  //       const data: boolean = true;
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("failed to load data");
  //       }
  //     });
  //   };

  //   //   calling create promise function
  //   const showData = async (): Promise<boolean> => {
  //     const data: boolean = await createPromise();
  //     return data;
  //   };
  //   showData();

  // promise:object

  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //   calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };
  showData();

  // API: json placeholder

  type Todo = {
    id: number;
    useId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // console.log(data);
    return data;
  };
  getTodo();

  //
}
