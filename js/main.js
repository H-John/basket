// var order = $('.item-shop-text__title');
$(document).ready(function(){
	// Находим плавающий блок и делаем его плавающим
	$('.basket').stick_in_parent({
		offset_top: -15
	});
});


$('.item-shop-price__btn').on('click',function(){
    var num = $(this).data('item');
    // добавляем крестик
    $('.basket-order'+num).html('<img src="img/close.png" alt=""></img>');
    // очистка корзины от товаров, работает через жопу (Нажатие на data = 1 удаляет все)
    $('.basket-order img').click(function(){
        $('.basket-order'+num).empty();
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
});
