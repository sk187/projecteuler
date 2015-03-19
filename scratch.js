function findLargestPrimeNumber(input){
	var array = [];
	console.log("Current array " + array );
	array.push(input);
	console.log("Current array with input " + array );
	var primeArray = [7,5,3,2]
	for (i = 0; i < primeArray.length; i++){
			
		for(a=0; a<array.length; a++){
			if ( array[a] % primeArray[i]== 0 
				&& array[a] !==primeArray[i] ){
				console.log("Current A is: " + array[a] + "being divided by " +primeArray[i])
				array.push(array[a]/primeArray[i]);
				array.push(primeArray[i]);
				array.splice(a,1);
				array.sort(function(a,b){
					return a-b
				});
				console.log("Sorted Array: " + array)
				console.log("Popped Array: " + array)
				a = 0
			};
			console.log("This A value " + array[a] + " doesn't divide even with " + primeArray[i] )
		}
		
		console.log("Array outside of if loop: "+ array )

	
	}
	return array
}

var n = findLargestPrimeNumber(100)

n