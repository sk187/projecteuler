function sum (num){
	for(i=0, sum=0; i < num; i++ ){
		if (i % 3 == 0 || i % 5 == 0){
			sum = sum+=i;
		}
	};
	
	return sum;
}

sum(1000);