function mean(myArray)
{
	var runningSum = 0;

	for(var i = 0; i < myArray.length; i++)
	{
		runningSum = runningSum + myArray[i];
		/* Alternate */
		//runningSum += myArray[i];
	}

	return runningSum / myArray.length;
}

var numArray = [5,10,15,20];

console.log(mean(numArray));