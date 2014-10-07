// Create the template for objects that are hotels
function Car(make, model, color, weight) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.weight = weight;
  this.isRunning = false;
  this.fuelLevel = 10;
  this.currentGear = "P";
  this.drive = function(miles, gear) { 
  	if( this.isRunning ){
     	this.fuelLevel = this.fuelLevel - (0.1 * miles);
     	this.currentGear = gear;
     }
  };
  this.toString = function() {
  	console.log(
	  	"Make: " + this.make + " Model: " + this.model +
	  	" Color: " + this.color + " Weight: " + this.weight +
	  	" Fuel: " + this.fuelLevel + " Current Gear: " + this.currentGear
  	  );
  };
  this.start = function(){
  	this.isRunning = true;
  }

  this.park = function()
  {
  	this.isRunning = false;
  	this.currentGear = "P";
  }

  this.fuelUp = function()
  {
  	this.fuelLevel = 10;
  }

}

//Constructor


// Create two hotel objects
/*var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);


// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');   
elHotel2.textContent = details2;
*/
var ford = new Car('Ford', 'F-150', 'White', '2 tons');
ford.drive(2000, 'R');
ford.start();
ford.drive(10, 'D');
ford.toString();
var honda = new Car('Honda', 'Accord', 'Navy Blue', '1800 lbs');
honda.toString();
