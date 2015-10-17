$(document).ready(function () {
	//Adding List//
	$("#todolist").fadeToggle();
	$("#add").click(function() {
		var newListItem = $("#addtolist").val();
		if (newListItem.length>0){
			//Adding Button HTML//
			$("#todolist").append('<ul><input type="checkbox" id="checkbox"/><li>' + newListItem + '</li><button class="delete2" class="delete">X</button></ul>');
			//Emties out the Input//
			$("#addtolist").val("");
			$("#todolist").show(300);
			//CSS for li's//
			$("li").css({"display": "inline"});
		}
	});
	//Deleting List//
	$('#bye').click(function(){
		$('ul').eq(1).remove();
	});
	$('#clear-all').click(function(e) {
    	$('li').children().remove();
	});
});
