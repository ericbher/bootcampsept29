function askQuestion()
{
	var numCorrect = 0;
	var answer1 = prompt("How many moons does Earth have?");
	if( answer1 == 1)
	{
		numCorrect++;
		//Alternate numCorrect = numCorrect + 1;
		//Alternate numCorrect += 1;
	}
	var answer2 = prompt("How many moons does Saturn have?");
	if( answer2 == 31)
	{
		numCorrect++;
	}
	var answer3 = prompt("How many moons does Venus have?");
	if( answer3 == 0)
	{
		numCorrect++;
	}

	document.write('You got ' + numCorrect + ' out of 3 correct!');
}