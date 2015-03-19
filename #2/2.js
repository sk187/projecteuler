function genFibonacci(num){
	var fibArray=[1,2];
	var nextFibNum = 0;

	while(fibArray[fibArray.length-1]< num){
		nextFibNum = fibArray[fibArray.length-2] + 
		fibArray[fibArray.length-1];
		fibArray.push(nextFibNum);
		i++;
	};

	if(fibArray[fibArray.length-1]>num){
		fibArray.pop()
	};

	return fibArray;
};

function genEvenFib(fibArray){
	var evenFibArray = [];
	fibArray.forEach(function(element){
		if(element%2 == 0){
			evenFibArray.push(element);
		};
	});
	return evenFibArray
};

function sumEvenFib(evenFibArray){
	var sum = 0;
	evenFibArray.forEach(function(element){
		sum+=element;
	});	
	return sum
};

var fibArray = genFibonacci(4000000);
var evenFibArray = genEvenFib(fibArray);
var sum = sumEvenFib(evenFibArray);
sum
