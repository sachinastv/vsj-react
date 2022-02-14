import React, { useState } from 'react';

const  VsjExpenseCalculator = (props) =>
{
	const expenses=
	[
{item:"Pepsi",amount:100,tdate:new Date(2022,2,10)},
{item:"Coke",amount:10,tdate:new Date(2022,1,10)}

	];
	const [
	expenseData, setExpense] = useState({
		id:Math.round(100000*Math.random()),
		item:'',
		amount:0,
		tdate:''
		
		/* Use n object instead of two useState*/
	});
	const itemChangeHandler=(event)=>
	{
		setExpense( (prevState)=>{
		return {...prevState,item:event.target.value};
		
	});
	console.log(expenseData);
	};
	const amountChangeHandler=(event)=>
	{
		setExpense( (prevState)=>{
		return {...prevState,amount:Number(event.target.value)};
		
	});
	console.log(expenseData);
	};
	
	const dateChangeHandler=(event)=>
	{
		setExpense( (prevState)=>{
		return {...prevState,tdate:event.target.value};
		
	});
	console.log(expenseData);
	};
	const submitHandler=(event)=>
	{
		event.preventDefault();
		console.log("Submitted");
		console.log(expenseData);
		setExpense({
		item:'',
		amount:0,
		tdate:''
		
		
	});
		
	};
	
	
	
	
	return  <form onSubmit={submitHandler}>
		{expenses.map(x=> <h2>{x.item}</h2>)}

		
		<h2>{expenses.length}</h2>
		<h2>{expenses[0].item}</h2>
		<h2>{expenses[1].item}</h2>
  <div class="form-group">
    <label for="item">Item</label>
    <input type="text" class="form-control" value={expenseData.item} onChange={itemChangeHandler} placeholder="Enter Item" id="item"/>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="number" class="form-control" value={expenseData.amount} placeholder="Enter Amount" id="amount" onChange={amountChangeHandler}/>
  </div>
  <div class="form-group">
    <label for="tdate">Date</label>
    <input type="date" class="form-control" value={expenseData.tdate} placeholder="Enter Date" id="tdate" onChange={dateChangeHandler}/>
  </div>
  <h2>Expense ={expenseData.amount}</h2>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>;
}
export default VsjExpenseCalculator;