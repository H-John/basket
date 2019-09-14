// var order = $('.item-shop-text__title');
$(document).ready(function(){
	// Находим плавающий блок и делаем его плавающим
	$('.basket').stick_in_parent({
		offset_top: -15
	});
});
var price = 0;

$('.item-shop-price__btn').on('click',function(){
    var num = $(this).data('item');   
    // Цена товара 
    var priceNum = parseInt($('.price' + num).html())
    price += priceNum
    // добавляем крестик
    var close = $('.basket-order'+num).html('<img src="img/close.png" alt=""></img>');
    // очистка корзины от товаров
    $(close).click(function(){
        $('.basket-order'+num).empty();
        // Когда добавляю один и тот же товар, а потом удаляю, то цена уходит
        // в минус
        price -= priceNum
        $('.price-all').html(price + 'руб.');
    });
    // По нажатию в корзину, определяет data-item и клонирует
    // в корзину
    $('.item-shop-text__title' + num).clone()
    .css({'font-size':'12px','margin':'0'})
    .appendTo('.basket-order'+num);
    // клон цены
    $('.item-shop-price__price' + num).clone()
    .css({'font-size':'12px','margin':'0'})
    .appendTo('.basket-order'+num);
    // Выводим цену в корзину
    $('.price-all').html(price + 'руб.');
});
