$("body").live("click",function(){

    if($("#Container div").position().top<-300)

    	$("#Container div").animate({"top":"+=100px"});

    else{

        $("#Container div").animate({"top":"-=100px"});

    }

});