// Constructor for defining new CurrentAccounts

function CurrentAccount(options){
    // default options

    this.minBalance = options.minBalance || 1000;
    this.interest = options.interest || 0 ;
  
}

// Constructor for defining new SavingAccounts

function SavingAccount(options){

    this.minBalance = options.minBalance || 5000;
    this.interest = options.interest  || 0.1;
 
}

// Define a skeleton accountFactory

function AccountFactory(){};

// Define the prototypes and utilities for this factory

// Our default accountClass is CurrentAccount

AccountFactory.prototype.AccountClass = CurrentAccount;

// Our Factory method for creating new Account instances

AccountFactory.prototype.createAccount = function(options = {}){

  switch(options.accountType){
    case 'current':
      this.AccountClass = CurrentAccount;
      break;
    case 'saving': 
      this.AccountClass = SavingAccount;
      break;

    // defaults to CurrentAccount
  }

  return new this.AccountClass(options);

}

function run(){
  const accountMaker = new AccountFactory();
  const account1 = accountMaker.createAccount();
  const account2 = accountMaker.createAccount({
      accountType : 'current',
      minBalance : 2000,
      interest : 0,
    });
  const account3 = accountMaker.createAccount({
      accountType : 'saving',
      minBalance : 20000,
    });
  console.log(account1);
  console.log(account2);
  console.log(account3);
}

run();

// out puts:
//CurrentAccount { minBalance: 1000, interest: 0 }
//CurrentAccount { minBalance: 2000, interest: 0 }
//SavingAccount { minBalance: 20000, interest: 0.1 }