$("ul").on("click", "li", function(event){
	if($(this).css("color") === 'rgb(102, 102, 102)'){
		$(this).css({
			color: "black",
			textDecoration: "line-through"
		});
	}else{
		$(this).css({
			color: 'rgb(102, 102, 102)',
			textDecoration: "none"
		});
	}
});

// (function() { 
//     var longpress = 150;
//     var start;
//     jQuery( "ul" ).on( 'mousedown', "li", function( e ) {
//         start = new Date().getTime();
//     } );

//     jQuery( "ul" ).on( 'mouseleave', "li", function( e ) {
//         start = 0;
//     } );

//     jQuery( "ul" ).on( 'mouseup', "li", function( e ) {
//         if (new Date().getTime() -  start <= longpress) {

//         	if($(this).css("color") === 'rgb(102, 102, 102)'){
// 				$(this).css({
// 					color: "black",
// 					textDecoration: "line-through"
// 				});
// 			}else{
// 				$(this).css({
// 					color: 'rgb(102, 102, 102)',
// 					textDecoration: "none"
// 				});
// 			}
              
//         }
//     });
// }());

$("input").on("keypress", function(event){
	if(event.which === 13){
		var va = $(this).val();
		$("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span><span class='edit'><i class='fa fa-edit'></i></span> " + va + "</li>");
		$(this).val("");
	}
});

$("ul").on("click", "span.trash", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("ul").on("click", "span.edit", function(event){
	var x = prompt();
	if(x !== null && x !== ""){
		$(this).parent().html("<span class='trash'><i class='fa fa-trash'></i></span><span class='edit'><i class='fa fa-edit'></i></span> " + x);
	}
	event.stopPropagation();
});

$("#plus").on("click", function(){
	$("input").slideToggle(100);
});

(function(){
	var count = 0;
	var press = 1000;
	$("div.std").click(function(){
		if(count === 0){
			count ++;
			start = new Date().getTime();
		}
		else{
			count ++;
			var end = new Date().getTime();
			if(end - start >= press){
				console.log(count-1);
				count = 0;
			}
		}
	})
}());