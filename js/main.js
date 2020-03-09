$(function() {
    $('#dark').on('click', function() {

        $('body, nav').toggleClass('dark');
        $('span').toggleClass('span-dark');

    })
})