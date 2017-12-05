var date = (function(){

	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	function checkInput(format) {
		if(format === undefined)
			format = 'long';
		else {
			if(!(format === 'long' || format === 'short'))
				throw new Error('Invalid Input');
		}
	}
	return {

		curDate: new Date(),

		today: function() {			
			this.curDate = new Date();
			return this.curDate;
		},
		date: function() {
			return this.today().getDate();
		},
		day: function(format) {
			checkInput(format);
			return (format === 'long') ? weekday[this.today().getDay()] : weekday[this.today().getDay()].substr(0, 3);
		},
		year: function(format) {
			checkInput(format);
			return (format === 'long') ? this.today().getFullYear() : this.today().getFullYear().toString().substr(2, 2);
		},
		hours: function() {
			return this.today().getHours();
		},
		ms: function() {
			return this.today().getMilliseconds();
		},
		mins: function() {
			return this.today().getMinutes();
		},
		month: function(format) {
			checkInput(format);
			return this.today().toLocaleString('us-en', { month: format });
		},
		secs: function() {
			return this.today().getSeconds();
		},

		timestamp: function() {
			return this.today().getTime();
		},
		time: function() {
			return this.hours()+":"+this.mins()+":"+this.secs();
		},

		tomorrow: function() {
			this.curDate = this.today();
			this.curDate.setDate(this.date(this.curDate) + 1);
			return this.curDate;
		},
		yesterday: function() {
			this.curDate = this.today();
			this.curDate.setDate(this.date(this.curDate) - 1);
			return this.curDate;
		}
	};

})();

