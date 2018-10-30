$(document).ready(function () {
    //формирование span для выделения букв в логотипе красным цветом
    $('.logo_litera').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace('С', '<span>С</span>'));
        ths.html(ths.html().replace('U', '<span>U</span>'));
    });
    // открывающееся поле поиска при клике на лупу + фокусировка курсора в поле поиска
    $('.search__btn').click(function () {
        $('.search__field').stop().slideToggle();
        $('.search__input').focus();
    });
    // закрытие поля поиска при нажатии клавиши Esc
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.search__field').slideUp();
        }
    });
    // закрытие поля поиска при клике по документу, вне шапки
    $(document).click(function () {
        $('.search__field').slideUp();
    });

    $('.search').click(function (e) {
        e.stopPropagation();
    })
});