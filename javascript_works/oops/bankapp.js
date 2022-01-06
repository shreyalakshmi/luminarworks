
class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions: [
                { creditTransactions: [] }, { debitTransactions: [] }
            ]
        },                                                                                //obj=>trans:{credit:[],debit:[]}
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions: [
                { creditTransactions: [] }, { debitTransactions: [] }
            ]
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions: [
                { creditTransactions: [] }, { debitTransactions: [] }
            ]
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions: [
                { creditTransactions: [] }, { debitTransactions: [] }
            ]
        },

    }
    session = {}              //"user":1000
    validateAccountNumber(acno) {                                           //to check if the account no exist
        return acno in this.accounts ? true : false                            // input ac no in accounts?
    }
    authenticateUser(acno, password) {
        if (this.validateAccountNumber(acno)) {       //if only ac no is valid
            let pwd = this.accounts[acno].password    //pwd=password from accounts
            if (password == pwd) {
                console.log("access granted");
                this.session["user"] = acno           //push to sesssion

            }
            else { console.log("access declined"); }

        }
        else { console.log("invalid ac no"); }
    }

    getBalance(acno) {
        return this.accounts[acno].balance           //will return the balance of the ac no
    }
    balanceEnquiry() {                               //so that u dont need to login again for balance enquiry
        if ("user" in this.session) {                 //if user is logged in the session
            let loggedUser = this.session["user"]      //push user in session to loggeduser
            console.log(this.getBalance(loggedUser));    //get balance of logged user
        }
        else { console.log("invalid session, login"); }
    }


    logginRequired() {
        return "user" in this.session          //to check if user is logged ?true:false
    }
    loginUser() {
        if (this.loginUser = this.session["user"])
            return "user" in this.session
    }

    fundTransfer(to_acno, amount) {
        if (this.logginRequired()) {           // only if user is logged in
            let loggedUser = this.session["user"]   //to get the ac no of logged user
            if (this.validateAccountNumber(to_acno)) {   //to check logged user is valid
                let currentbalance = this.getBalance(loggedUser)  //to get balance of logged user
                if (amount > currentbalance) {
                    console.log("insufficient balance");
                }
                else {
                    this.accounts[loggedUser].balance = currentbalance - amount   // to debit from from acnt holder
                    let fromavailablebalance = this.getBalance(loggedUser)
                    let debitdetails = { from: loggedUser, amount: amount }
                    console.log(`your acno ${loggedUser} has been debited with ${amount}, avl balance is ${fromavailablebalance}`);

                    this.accounts[to_acno].balance = currentbalance + amount
                    let toavailablebalance = this.getBalance(to_acno)
                    let creditdetails = { to: to_acno, amount: amount }
                    console.log(`your acno ${to_acno} has been debited with ${amount}, avl balance is ${toavailablebalance}`);

                    this.accounts[loggedUser].transactions[1].debitTransactions.push(debitdetails)

                    this.accounts[to_acno].transactions[0].creditTransactions.push(creditdetails)


                    // console.log("completed");

                }

            }
            else { console.log("invalid acno"); }

        }
        else { console.log("login"); }
    }

    getCreditTransactions(){
        let user=this.loginUser
        this.accounts[user].transactions.creditTransactions.foreach(t=>console.log(t))
    }
    getDebitTransactions(){
        let user=this.loginUser
        this.accounts[user].transactions.debitTransactions.foreach(t=>console.log(t))
    }
    getTransactionhistory(){
        let user=this.loginUser
        console.log(this.accounts[user].transactions);
    }


}
var bank = new Bank()                                                    // bcz in class have to an object new bank
console.log(bank.validateAccountNumber(1000));                        //log object.acount no inputed
bank.authenticateUser(1000, "userone")
bank.balanceEnquiry()                                  //()bcz in authenticate already values added

bank.fundTransfer(1002, 2000)
bank.getTransactionhistory(1000)
