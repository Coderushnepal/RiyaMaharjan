var body= document.body;

var main=document.createElement('div');
body.append(main);

var topic= document.createElement('h2');
topic.innerHTML='Expense Tracker';
main.append(topic);

var container=document.createElement('div');
container.className='container'
main.append(container);

var balanceTitle=document.createElement('h4');
balanceTitle.innerHTML='Your Balance'
container.append(balanceTitle);

var balanceContent=document.createElement('h1');
balanceContent.innerHTML='$0.00';
balanceContent.id='balance';
container.append(balanceContent);

var incomeExpenseContainer=document.createElement('div');
incomeExpenseContainer.className='inc-exp-container';
container.append(incomeExpenseContainer);

var income=document.createElement('div');
incomeExpenseContainer.append(income);

var incomeTitle=document.createElement('h4');
incomeTitle.innerHTML='Income';
income.append(incomeTitle);

var incomeDetail= document.createElement('p');
incomeDetail.id='money-plus'
incomeDetail.classList.add('money');
incomeDetail.classList.add('plus')
incomeDetail.innerHTML='+$0.00'
income.append(incomeDetail);

var expense=document.createElement('div');
incomeExpenseContainer.append(expense);

var expenseTitle=document.createElement('h4');
expenseTitle.innerHTML='Expense';
expense.append(expenseTitle);

var expenseDetail= document.createElement('p');
expenseDetail.id='money-minus'
expenseDetail.classList.add('money');
expenseDetail.classList.add('minus')
expenseDetail.innerHTML='-$0.00'
expense.append(expenseDetail);

var historyTitle=document.createElement('h3');
historyTitle.innerHTML='History';
container.append(historyTitle);

var historyList=document.createElement('ul');
historyList.id='list';
historyList.className='list'
container.append(historyList)

var addTransaction=document.createElement('h3');
addTransaction.innerHTML='Add new Transaction'
container.append(addTransaction);

var transactionForm=document.createElement('form')
transactionForm.id='form'
container.append(transactionForm);

// var formControl=document.createElement('div')
// formControl.className='form-control'
// transactionForm.append(formControl);

var formTypes = [
    {
        content:'Text',
        for:'text',
        type:'text',
        id:'text',
        placeholder:'Enter text...',
    },
    {
        content:'Amount <br> (negative - expense, positive - income)',
        for:'amount',
        type:'number',
        id:'amount',
        placeholder:'Enter amount...',
    },
];

formTypes.forEach((element)=>{
    var formControl=document.createElement('div')
    var labelItem=document.createElement('label')
    var inputItem=document.createElement('input')

    transactionForm.append(formControl);

    labelItem.getAttribute('for',element.for)
    labelItem.innerHTML=element.content
    formControl.append(labelItem)

    inputItem.setAttribute('type',element.type)
    inputItem.setAttribute('id',element.id)
    inputItem.setAttribute('placeholder',element.placeholder)
    formControl.append(inputItem)
})

var button=document.createElement('button');
button.className='btn'
button.innerHTML='Add transaction'
transactionForm.append(button)

var notification=document.createElement('div')
notification.className='notification-container'
notification.id='notification-container'
notification.innerHTML='Please enter text and amount'
container.append(notification)
