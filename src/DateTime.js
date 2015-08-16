// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var month="",day="",year="",i=0;
	if(dateString==null)
		return ;
	while(dateString[i]!==' ' && i!=dateString.length){
	    month+=dateString[i];
		i++;
	}
	if(!months.indexOf(month))
		return;
	while(dateString[i]!=','&& i!=dateString.length){
		day+=dateString[i];
		i++;
	}
	if(Number(day)<=0 || Number(day)>=31)
		return;
	while(i<dateString.length){
		year+=dateString[i];
		i++;
	}
	if(Number(year)<=0||Number(year)>=9999)
		return;
	return Number(day);
}

