function TV(make, model, screenSize, resolution)
{
	this.make = make;
	this.model = model;
	this.screenSize = screenSize;
	this.resolution = resolution;
	this.isOn = false;
	this.volumeLevel = 0;
	this.currentChannel = "3";
	this.changeChannel = function(channel){
		if(this.isOn)
			this.currentChannel = channel;
	};
	this.changeVolume = function(volume){
		if(this.isOn)
			if(volume >= 0 && volume <= 100)
				this.volumeLevel = volume;
	};
	this.power = function(){
		this.isOn = !this.isOn;
	};
}

var samsung = new TV('Samsung', 'CN-1500', 37, '1080P');

samsung.changeVolume(-57);
samsung.changeChannel('HDMI 3');
samsung.power();
samsung.changeVolume(15);
samsung.changeChannel('HDMI 1');
samsung.changeChannel('183');
samsung.power();
samsung.changeChannel('2355');
samsung.changeVolume(-1000);

