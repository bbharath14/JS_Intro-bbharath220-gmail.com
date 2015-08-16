exports.ReverseString = function(str){
	var reverseString="";
	for(var i=str.length-1;i>=0;i--){
		reverseString+=str[i];
	};
	return reverseString;
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
	var firstNames=new Array();
	if(str==null)
		return null;
	for(var i=0;i<str.length;i++){
		if(str[i]==','){
			i++;
			var first="";
			while((str[i]!=';')&&(i!=str.length)){
				first+=str[i];
				i++;
			}
			firstNames.push(first);
		}
	};
	return firstNames;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var reverseArray=new Array();
	for(var i=0;i<arrayOfStrings;i++){
		reverseArray.push(exports.ReverseString(arrayOfStrings[i]));
	}
	return reverseArray;
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){
	if(arrayOfStrings==null)
		return null;
	var paragraph="";
	for(var i=0;i<arrayOfStrings.length;i++){
		paragraph+=arrayOfStrings[i]+".";
	}
	return paragraph;
}

