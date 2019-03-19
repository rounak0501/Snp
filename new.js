jQuery(document).ready(function(){


    $(window).scroll(function(){
        var top= $(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondary');
        }
        else
            if($("header").addClass('secondary')){
                $("header").removeClass('secondary')
        }
    });

    });

