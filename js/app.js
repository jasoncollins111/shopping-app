$(document).ready(function(){
//Using enter to submit text
	$(document).keypress(function(event){
		if(event.which==13){
			var enter = $('#addItem').val();
    		var item = $('<div class="stuff"></div>').text(enter);
		
		if (enter!=""){
			$("#main").append(item);
			$("#addItem").val("");
		}
		
		else{alert('Type an item')}
		}
		
	//Click once to strike through and dblClick to delete
		item.on('click',function(){
			$(this).toggleClass("itemsCrossed")
		});
		item.on('dblclick',function(){
			$(this).fadeOut('slow')
		});
		
	});

//If you want an 'add' button, uncomment #add in html
	$('#add').on('click',function(){
		var enter = $('#addItem').val();
    	var item = $('<div class="stuff"></div>').text(enter);

		if (enter!=""){
			$("#main").append(item);
			$("#addItem").val("");
		}
		else{alert('Type an item')}

	});
});