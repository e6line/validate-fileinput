/*
*
* Function to validate File size
*
*/

function findSize(field_id){

	var fileInput = $("#"+field_id);

	byteSize  = fileInput.files.fileSize;

	return ( Math.ceil( byteSize / 1*1024 ) );   //1KB

}


/*
*
* Function to validate File required
*
*/

function findRequired (field_id) {

	var fileInput = $("#"+field_id);

	return ($.trim(fileInput.val()) !='');   

}

