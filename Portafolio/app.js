$(Window).on('scroll',function(){
    if($(Window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})

