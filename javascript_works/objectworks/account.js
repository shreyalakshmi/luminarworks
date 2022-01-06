var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },           //debit transactions
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//total no of accounts
//   console.log(    accounts.length);


//all act who's accout type savings
// accounts.filter(save=>save.ac_type=="savings").forEach(acntnum=>console.log(acntnum.acno) )

  //print balance of actno 1000
//    accounts.filter(balanc=>balanc.acno=="1000").forEach(bal=>console.log(bal.balance))


   //print all gpay trans details
var trans=accounts.map(data=>data.transactions).flat().filter(meth=>meth.method=="g-pay")
// console.log(trans);

//credit transactions of 1002
var credit=accounts.map(tran=>tran.transactions).flat().filter(credit_trans=>credit_trans.to==1002)
// console.log(credit);

//highest balance account details

// var high=accounts.reduce((ac1,ac2)=>ac1>ac2?ac1:ac2)
// console.log(high);

var high=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(high);
     
//print trans history of 1002    debited+credited
var debithis=accounts.find(num=>num.acno==1002).transactions
// console.log(debithis);
var credithis=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002)
// console.log(credithis);
var transaction_his={"debithistory":debithis,"credithistory":credithis}
console.log(transaction_his);

var transhistory=debithis.concat(credithis)
// console.log(transhistory);




