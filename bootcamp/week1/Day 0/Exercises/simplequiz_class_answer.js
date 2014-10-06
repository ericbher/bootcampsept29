var questions = [
					["How many moons does Earth have?", 1],
					["How many moons does Saturn have?", 62],
					["How many moons does Venus have?", 0],
					["How many suns does our solar system have?!", 1],
					["How many moons does Mecury have?", 0],
					["How many moons does Mars have?", 0],
					["How many Neptunes does our solar system have?!", 1]
				];
var totalCorrect = 0;

function askQuestion(question)
{
	//What should this method do?
	var answer = prompt(question[0]);
	if( answer == question[1] ){
		totalCorrect = totalCorrect + 1;
		//totalCorrect += 1;
		//totalCorrect++;
	}

}

function startQuiz()
{
	for(var i = 0; i < questions.length; i++)
		askQuestion(questions[i]);
	document.write("You got " + totalCorrect + " out of " + questions.length + " correct!");
}