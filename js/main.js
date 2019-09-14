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
    if ($('.basket-order'+num).children().length)
	{
		alert('Товар уже в корзине!');
		return;
	}
    var priceNum = parseInt($('.price' + num).html());
    price += priceNum;
    // добавляем крестик
    $('.basket-order'+num).html('<img src="img/close.png" alt=""></img>');
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
    $('.price-all').html(price + ' руб.');
});


$('.basket-order').click(function(){	
	var priceNum = $(this).find('span').html();
	$(this).empty();
	price -= priceNum;
	$('.price-all').html(price + 'руб.');
});
