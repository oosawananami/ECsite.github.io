$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
});

//選択した商品の情報取得
$('.content_wrap').on('click',function(){
  const i_name = $(this).data('name');
  const i_price = $(this).data('price');
  const i_img = $(this).data('img');

  window.location.href = 'shop.html' + "?name=" + i_name + "&price=" + i_price + "&img=" + i_img;
});
