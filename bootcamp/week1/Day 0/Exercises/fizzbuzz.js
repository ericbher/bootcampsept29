function isDivisibleBy3(number)
{
	return number % 3 == 0;
}

function isDivisibleBy5(number)
{
	return number % 5 == 0;
}

function display(output)
{
	console.log(output);
}

function fizzBuzz(endNum)
{
	for(var i = 1; i <= endNum; i++)
	{
		if( isDivisibleBy3(i) && isDivisibleBy5(i))
			display('Fizz Buzz');
		else if( isDivisibleBy3(i) )
			display('Fizz');
		else if( isDivisibleBy5(i))
			display('Buzz');
		else
			display(i);
	}
}

fizzBuzz(15);
fizzBuzz(30);
fizzBuzz(60);
fizzBuzz(100);
fizzBuzz(500);




