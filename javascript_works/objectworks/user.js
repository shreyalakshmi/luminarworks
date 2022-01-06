var users = {
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
// console.log(users[1000]);      //users[1000]=print all details of 1000
// console.log(users[1000].balance);     //print balance of 1000
// console.log(users[1003].personName);   //print personname of 1003
// console.log("1005" in users);         //find if 1005 is in users

// function authenticate(ac_num, password) {
//     if (ac_num in users) {
//         let pwd = users[ac_num].password   //pwd=original pass
//         if (pwd == password) { return 1 }
//     }
//     else {
//         return -1     //invalid password
//     }
// }
// console.log(authenticate(1007, "userone"));

function validateAccno(acno) {                        //to check if the from and to acc no exist
    //     if (accno in users) {
    //         return true
    //     }
    //     else { return false }
    // }
    return acno in users ? true : false

}
function fundTransfer(from_acno, to_acno, amount) {
    if (validateAccno(from_acno) && validateAccno(to_acno)) {            //only if from and to acno exist
        let oldbal = users[from_acno].balance                     //from ac no's current balance calling
        if (amount > oldbal) {
            console.log("insufficient balance");
        }
        else {
            users[from_acno].balance = oldbal - amount               //to debit amount from from_acno
            let from_ac_balance = balanceEnquiry(from_acno)           // connected with below ques of finding balance where acno=>from_acno
            let debittrans = { from: from_acno, amount: amount }       //to get debited trans history
            console.log(`your acno ${from_acno} has been debited with ${amount} avl balance is ${from_ac_balance}`);

            users[to_acno].balance = oldbal + amount
            let to_ac_balance = balanceEnquiry(to_acno)
            let credittrans = { to: to_acno, amount: amount }      //to get credited trans history
            console.log(`your acno ${to_acno} has been credited with ${amount} avl balance is ${to_ac_balance} `);

            users[from_acno].transactions[1].debitTransactions.push(debittrans)    //users[from_acno]=bcz debited from from_acno,trans[1]=1st index,.dbt=to push in the debit[] from debittrans
            users[to_acno].transactions[0].creditTransactions.push(credittrans)  //transactions.credittr.push(credtt)=>for object

        }
    }
    else { console.log("invalid account number"); }

}

fundTransfer(1002, 1000, 200)

//find balance of valid ac no
function balanceEnquiry(acno) {
    if (validateAccno(acno)) {         //to check if acno exist

        return users[acno].balance    //if yes then return the balance

    }
    else {
        console.log("invalid");
    }
}
// console.log(balanceEnquiry(1000));

// let avlBal=balanceEnquiry(1000)
// console.log("aval balance "+avlBal);