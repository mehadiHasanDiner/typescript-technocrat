{
  //
  // Getter, setter। ফাংশনের মত ব্যবহার করছি কিন্তু একসেস করছি প্রোপাটি মত করে।
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // setter ব্যবহার করে করছি
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    //    public addDeposit(amount: number) {
    //       this._balance = this._balance + amount;
    //     }
    // এখানে addDeposit ব্যবহার করছি ফাংশন কল করে।

    //    public getBalance() {
    //       return this._balance; // এখানে getBalance ব্যবহার করছি ফাংশন কল করে।
    //     }

    // Getter ব্যবহার করে করছি
    get Balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    // test(){
    //     this.
    // }
  }

  const poorManAccount = new BankAccount(111, "Mr.Poor Man", 20);
  //   poorManAccount.balance =
  //   poorManAccount.addDeposit(20);
  //   const myBalance = poorManAccount.getBalance();
  poorManAccount.deposit = 50;
  const myBalance = poorManAccount.Balance;

  console.log(myBalance);

  //
}
