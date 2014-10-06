var questions = [
					["How many moons does Earth have?", 1],
					["How many moons does Saturn have?", 62],
					["How many moons does Venus have?", 0],
					["How many moons does the moon have?", 0]
 				];

var numCorrect = 0;

function startQuiz()
{
	for(var i = 0; i < questions.length; i++)
	{
		askQuestion(questions[i]);
	}
	showScore();
}


function askQuestion(question)
{
	var answer = prompt(question[0]);
	if( answer == question[1])
	{
		numCorrect++;
		//Alternate numCorrect = numCorrect + 1;
		//Alternate numCorrect += 1;
	}
}

function showScore()
{
	document.write('You got ' + numCorrect + ' out of ' + questions.length + ' correct!');
}

