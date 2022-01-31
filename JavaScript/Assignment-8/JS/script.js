var state = {
  balance: 0,
  income: 1200,
  expense: 200,
  transactions: [
    {name: "Salary",amount: 5000,type: "income",},
    {name: "Grocery",amount: 50,type: "expense",},
    {name: "Guitar",amount: 500,type: "expense",},
  ],
};

var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#money-plus");
var expenseEl = document.querySelector("#money-minus");
var transactionsEl = document.querySelector("#list");

function init() {
  balanceEl.innerHTML = `$${state.balance}`;
  incomeEl.innerHTML = `+$${state.income}`;
  expenseEl.innerHTML = `-$${state.expense}`;

  var transactionEl;
  for (var i = 0; i < state.transactions.length; i++) {
    transactionEl = document.createElement("li");
    transactionEl.append(state.transactions[i].name);
transactionsEl.append(transactionEl)
  }
}

init();
