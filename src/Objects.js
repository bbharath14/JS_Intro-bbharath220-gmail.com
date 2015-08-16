exports.GetObjectPropertyNames = function(obj) {
	if(obj==null)
		return;
	var propNames=new Array();
	for(var prop in obj){
		propNames.push(prop);
	}
	return propNames;
}

exports.GetObjectPropertyValues = function(obj) {
	if(obj==null)
		return;
	var propValues=new Array();
	for(var propName in obj){
		propValues.push(obj[propName]);
	}
	return propValues;
}

