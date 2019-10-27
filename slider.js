let slider = $('.slider');
let sliderLenta = slider.find('.slider-lenta');
let sliderItems = slider.find('.slider-lenta-item.real');
sliderLenta.css( 'width', (sliderItems.length + 2) * 100 + "%" );
let sliderBullets = slider.find('.slider-bullets button');

//sliderItems.length 
let nowShowIndex = 0;
//eq() - jquery метод, позволяющий брать n-ый элемент из набора

slider.find('.slider-arrow-left').click(function(){
    if( sliderLenta.hasClass('animated') ){
        return;
    }

    sliderLenta.addClass('animated');
    if( nowShowIndex <= 0 ){
        nowShowIndex = nowShowIndex -1; 

        sliderLenta.animate({
            left: -100 * (nowShowIndex+1) + "%"
        }, 500, function(){
            nowShowIndex = sliderItems.length - 1;
            sliderLenta.css('left', -100 * (nowShowIndex+1) + "%");
            sliderLenta.removeClass('animated');
        }); 

    }else{
        nowShowIndex = nowShowIndex -1; 
        sliderLenta.animate({
            left: -100 * (nowShowIndex+1) + "%"
        }, 500, function(){
            sliderLenta.removeClass('animated');
        });      
    }



    // if( nowShowIndex <= 0 ){
    //     sliderItems.eq(nowShowIndex).fadeOut();
    //     nowShowIndex = sliderItems.length - 1;
    //     sliderItems.eq(nowShowIndex).css('display', 'flex');    
    // }else{
    //     sliderItems.eq(nowShowIndex).fadeOut();
    //     sliderItems.eq(nowShowIndex - 1).css('display', 'flex');
    //     nowShowIndex = nowShowIndex - 1;
    // }

        // sliderItems.eq(nowShowIndex).hide();
        // sliderItems.eq(nowShowIndex - 1).css('display', 'flex');
        // nowShowIndex = nowShowIndex - 1;

        // if( nowShowIndex < 0 ){
        //     nowShowIndex = sliderItems.length-1;
        //     sliderItems.eq(nowShowIndex).css('display','flex');
        // }
});

slider.find('.slider-arrow-right').click(function(){
    if( sliderLenta.hasClass('animated') ){
        return;
    }
    sliderLenta.addClass('animated');
    if( nowShowIndex >= sliderItems.length - 1 ){
        //nowShowIndex = 0;
        // sliderLenta.css('left', -100 * nowShowIndex + "%");
        nowShowIndex = nowShowIndex + 1;

        sliderLenta.animate({
            left: -100 * (nowShowIndex+1) + "%"
        }, 500, function(){
            nowShowIndex = 0;    
            sliderLenta.css('left', -100 * (nowShowIndex+1) + "%");
            sliderLenta.removeClass('animated');
        });
    }else{
        nowShowIndex = nowShowIndex + 1;
        /* 
        0:  0%;
        1:  -100%
        2:  -200%
        
       */
        sliderLenta.animate({
            left: -100 * (nowShowIndex+1) + "%"
        }, 500, function(){
            sliderLenta.removeClass('animated');
        });
    }



    // if( nowShowIndex >= sliderItems.length - 1){
    //     sliderItems.eq(nowShowIndex).fadeOut(500, function(){
    //         nowShowIndex = 0;
    //         sliderItems.eq(nowShowIndex).css('display', 'flex');
    //     });

    //     // nowShowIndex = 0;
    //     // sliderItems.eq(nowShowIndex).css('display', 'flex');
    //     //Ветка, когда мы в последнем слайде           
    // }else{
    //     sliderItems.eq(nowShowIndex).fadeOut();
    //     sliderItems.eq(nowShowIndex + 1).css('display', 'flex');
    //     nowShowIndex = nowShowIndex + 1;
    // }
});

sliderBullets.click(function(){
    if( sliderLenta.hasClass('animated') ){
        return;
    }
    sliderLenta.addClass('animated');
    let index = sliderBullets.index( $(this) );
    nowShowIndex = index;
        /* 
        0:  0%;
        1:  -100%
        2:  -200%
        
       */
    sliderLenta.animate({
        left: -100 * (nowShowIndex+1) + "%"
    }, 500, function(){
        sliderLenta.removeClass('animated');
    });
});

//setInterval - функция управления временем, таймер

// setInterval(function(){
//     slider.find('.slider-arrow-right').click();   
// }, 2000);