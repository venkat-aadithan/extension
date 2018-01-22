$(document).ready(function(){

	$('#usernameId').val('arul654321');
	$('input[name="j_password"]').val('Arul654321');
	$('input[name="j_captcha"]').focus();
	$('input[name="j_captcha"]').keyup(function(){
		if($(this).val().length === 5){
			$('#loginbutton').trigger('click');
		}
	});

		//alert();
	if($('input[name="jpform:fromStation"]').val() === ''){
		$('input[name="jpform:fromStation"]').val('CHENNAI EGMORE - MS');
		$('input[name="jpform:toStation"]').val('MADURAI JN - MDU');
		$('input[name="jpform:journeyDateInputDate"]').val('21-01-2018');
		$('input[name="jpform:jpsubmit"]').trigger('click');
	}	
	

	$('.journeyTrainList').children('')
	
});