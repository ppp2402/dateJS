(function(){
	console.log('Date - ', date.date(), date.day(), date.year(), date.hours(), date.ms(), date.mins(), date.month(), date.secs(), date.timestamp(), date.time());
	console.log('Today - ', date.today());
	console.log('Tomorrow - ', date.tomorrow());
	console.log('Tomorrow - ', date.yesterday());
	console.log('Month - ', date.month('long'), date.month('short'));
	console.log('Day - ', date.day('long'), date.day('short'));
	console.log('Year - ', date.year('long'), date.year('short'));
})();