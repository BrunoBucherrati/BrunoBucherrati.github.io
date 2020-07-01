$(document).ready(function() {
    let windowHeight = $(window).height();

    $('.link').on('click',
    
    function() {
        $('.link').each(function() {$(this).addClass('not-active')});

        let href = $.attr(this, 'href'),
        scrollTop = Math.abs($(document).scrollTop() - $(href).offset().top) / windowHeight;
        
        $('html, body').animate({
                scrollTop: $(href).offset().top,
            }, 300*scrollTop);
    

        setTimeout(function() {
            $('link').each(function() {$(this).removeClass('not-active')})
        }, 300*scrollTop)

        return false;

    }
    )
    
})