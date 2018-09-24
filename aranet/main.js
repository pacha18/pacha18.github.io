//***************Scroll Suavizado*************************************
$(document).ready(function(){
	$("#menu a").click(function(e){
		e.preventDefault();
		//probar el offset
		//console.log($('#footer').offset().top);
		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top-50
		},1000);
		return false;
	});
}); 
        $("#head").on("click", function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 1000); 
        });
   
