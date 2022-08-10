const quantity = $('#quantity').get(0);
$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
});

//選択した商品の情報取得
$('.content_wrap').on('click',function(){
  const i_name = $(this).data('name');
  const i_price = $(this).data('price');

  window.location.href = 'shop.html' + "?name=" + i_name + "&price=" + i_price ;
});


//商品の購入個数選択start
$('#plus').on('click',function(){
  quantity.value++
});

$('#minus').on('click',function(){
  if(quantity.value >= 2){
    quantity.value--
  }else{
    quantity.value = 1;
  }
});
//商品の購入個数選択end

//カートに追加
var add = $('.add_cart')
add.on('click',function (){
  alert("カートに追加しました");

});

//お気に入りに追加
var like = $('.add_like')
like.on('click',function(){
  alert("お気に入り");
});
