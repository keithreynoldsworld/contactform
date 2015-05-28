$(document).on('ready', function(){
	

	$( 'form' ).submit(function( event ) {
		var input1 = $('#a1').val();
		var input2 = $('#a2').val();
		var input3 = $('#a3').val();
		var input4 = $('#a4').val();
		var crazy = 0;
		console.log(event);console.log(input1);
 		if(input1 === ""){$('#keith1').html("NAME REQUIRED</br>");crazy = 1;}
 		if(input2 === ""){$('#keith2').html("EMAIL REQUIRED</br>");crazy = 1;}
 		if(input3 === ""){$('#keith3').html("WEBSITE REQUIRED</br>");crazy = 1;}
  		if(input4 === ""){$('#keith4').html("MESSAGE REQUIRED</br>");crazy = 1;}

		if(input2.indexOf('@') === -1){$('#keith2').html("please be sure your email is valid<br/>");crazy = 1;}
		if(input3.indexOf('http://') === -1){$('#keith3').html("WEBSITE MUST BEGIN WITH http://");crazy = 1;}
		if(crazy === 0){$('#success').html("SUCCESS!!!");}
		event.preventDefault();



	});



console.log('keith');


});