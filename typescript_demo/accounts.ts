class Account
{
    accId:number;
    accName:string;
    accBalance:number;
    constructor(accId,accName, accBalance)
   {
       this.accId=accId;
       this.accName=accName;
       this.accBalance=accBalance;
   } 
    
}
 class SavingAccount extends Account
{
    interest:number;
    constructor(accId,accName,accBalance,interest)
    {
        super(accId,accName,accBalance);
        this.interest=interest;
    }
     getBalance()
    {
        return this.accBalance+(this.accBalance*(this.interest/100));
    }
}
 class CurrentAccount extends Account
{
    cashCredit:number;
    constructor(accId,accName,balance,cashCredit)
    {
        super(accId,accName,balance);
        this.cashCredit=cashCredit;
    }
      getBalance()
    {
        return this.accBalance+this.cashCredit;
    }
}

let savingAccount = new SavingAccount(101,"Anuj",1000,100);
console.log(savingAccount.getBalance());