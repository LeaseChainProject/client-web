$(document).ready(function () {


$(".card").each(function(index) {
    $(this).hide().delay(200*index).fadeIn(100);
});

	
});

