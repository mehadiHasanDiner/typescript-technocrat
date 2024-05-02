// Learning functions in typescript
// => Normal function
// => Arrow function
{
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  // add(2, "3");

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object => function => method

  const poorUser = {
    name: "Mehadi",
    balance: 0,
    addBalance(balance: number): string {
      return `My Balance is : ${this.balance + balance}`;
    },
  };

  const numArr = [1, 4, 6, 7, 9];

  const newArr: number[] = numArr.map((elem: number): number => elem * elem);
}
