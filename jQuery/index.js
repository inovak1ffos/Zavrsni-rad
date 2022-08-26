function deleteLi(Li){
	$(Li).parent().parent().remove()
}
function completeLi(Li){
	$(Li).parent().parent().addClass("completed")
}
$('#submit').click(function(event){
	$('ul').append($('<li>').text($("#entryinput").val()))
	$('#entryinput').val('')
})



for (i =0; i < document.querySelectorAll("button").length; i++)
 { document.querySelectorAll("button")[i].addEventListener("click",function(){
	 document.querySelector("h1").style.color = "red"; 
	});}

	$("button").click(funtion() { $("h1").css("color", "red");}) 