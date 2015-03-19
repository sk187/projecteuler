function sumEvenFibonacci(num){
	var num1 = 1;	
	var num2 = 2;
	var num3 = 0;
	var sum = 0;

	while(num2 < num){
		if(num2 %2 === 0){
			sum+= num2
		}
		num3 = num1 + num2
		num1 = num2
		num2 = num3
	};
	return sum
}
var sum = sumEvenFibonacci(4000000);

sum