//1)

function sayHi() {
	console.log(name);
	console.log(age);
	var name = 'Lydia';
	let age = 21;
}

// sayHi();
// output is undefined and ReferenceError
// Functional execution is created when the function is envoked, creation phase runs through and DECLARES space in memory
// to al the variables, var is declared and initialized with undefined, let/ const is just initialized. because JS is synchonous (single threaded),
// when we go to log name & age the variables have only been initialzed and not declared with actual values given.

// if name and age were above the logs in the function OR scoped globally there would be no error.

for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
}
