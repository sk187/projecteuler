function findLargestPrimeNumber(input){
	var divisorArray = []
	var divisor = 3
	var array = [input]
	var primeArray = []
	//gets the square root rounded up of the input
	var squareRoot = Math.ceil(Math.sqrt(input))
	//create array of possible divisors 
	while(divisor < squareRoot){
		divisorArray.push(divisor)
		divisor+=2
	}
	//factor Even Numbers Out
	for(i = 0; i<array.length;){
		if(array[i]%2==0){
			if(array[i]==2){
				array.splice(i,1);
			}
			else{
				array.push(array[i]/2);
				array.splice(i,1);
			}
			
		}	
		else{
			i++
		}
	}
	i = 0;
	
	//divide all possible divisor with input number
	for (a = 0; a<array.length;){
		//array divide evenly with divisorArray? 
		if (array[a]%divisorArray[i] == 0){
			//If array / divisorArray == 1

			if(array[a]/divisorArray[i] == 1){
				//Remove from array, put into primeArray
				var removed = array.splice(a,1)
				primeArray.push(removed);
			}
			//Else
			else{
				//divde, push factors
				array.push(array[a]/divisorArray[i]);
				array.push(divisorArray[i]);
				// remove divided value
				array.splice(a,1);
			}

			i = 0
		}
		//Does not divide evenly
		else{
			//Check if a is less than divisorArray.length
			if( i<divisorArray.length ){
				i++;
			}
			// if A is greater than divisorArray.length
			else{
				//Go to the next number in the array
				a++;
			}
			
		}

	}
	primeArray.sort(function(a, b) {
  		return a - b;
	});
	return primeArray[primeArray.length-1]
}


findLargestPrimeNumber(600851475143)







