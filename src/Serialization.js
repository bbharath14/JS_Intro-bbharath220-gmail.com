exports.ParseNumber = function(str){
	if(str==null||str.length==0)
		return;
	return Number(str);
}

exports.ConvertNumberToString = function(num){
	if(num==null||num.length==0||typeof(num)!="number")
		return "";
	return num.toString();
}

exports.ParseDate = function(str){
	if(str==null||str.length==0)
		return;
	return new Date(str);
}

exports.ConvertDateToString = function(dateValue){
	if(dateValue==null)
		return;
	return dateValue.toString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	if(str==null||typeof(str)!="string"||str.length==0){
		return [];
	}
	var StringArray=str.split(",");
	var ArrayNumbers=new Array();
	for(var i=0;i<StringArray.length;i++){
		ArrayNumbers.push(exports.ParseNumber(StringArray[i]));
	}
	return ArrayNumbers;
}

exports.ConvertArrayOfNumbersToString = function(obj){
	if(obj==null||obj.length==0){
		return "";
	}
	var ArrayString="";
	for(var i=0;i<obj.length-1;i++){
		var str=exports.ConvertNumberToString(obj[i]);
		if(str!=null&&str.length!=0)
			ArrayString+=str+",";
	}
	var str=exports.ConvertNumberToString(obj[i]);
	if(str!=null&&str.length!=0)
		ArrayString+=str;
	return ArrayString;
}


exports.ConvertStringToObject = function(str){
	if(str==null||str.length==0)
		return;
	try{
		var json=JSON.parse(str);
	}
	catch(e){
		return null;
	}
	return json;
}

exports.ConvertObjectToString = function(obj){
	if(obj==null||obj.length==0)
		return;
	return JSON.stringify(obj);
}


