function square(num)
{
	return num * num;
	return Math.pow(n, 2);
}

function divideBy2(n)
{
	return n / 2;
}

function squareThenDivideBy2(n)
{
	return divideBy2( square(n) );
}

function power(number, power)
{
	var result = 1;
	for(var i = 1; i <= power; i++)
	{
		result = number * result;
	}
	return result;

}
/*console.log(square(8*9)); //console.log(4)
console.log(square(3));
console.log(square(4));
console.log(square(5));*/
//console.log(power(2,2));
//console.log(power(2,3));
console.log(squareThenDivideBy2(4));
