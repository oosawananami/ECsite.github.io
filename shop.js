$(function(){
  const param = decodeURIComponent($(location).attr('search'));

  //1つ目のパラメータ―(商品名)を取得
  const param1 = (String(param.split('&')[0]));

  const prm_txt = (String(param1)).split("=");
  $('.product_name').text(prm_txt[1]);

  //data属性にも追加
  $('.product_name').data('name',prm_txt[1]);

  const result = $('.product_name').data('name');
  console.log(result);


  //2つ目のパラメータ―（値段）を取得
  const param2 = (String(param.split('&')[1]));

  const prm_price = (String(param2)).split("=");
  $('.producut_price').text(prm_price[1]);
  $('.producut_price').data('price',prm_price[1]);

  const result2= $('.producut_price').data('price');
  console.log(result2);
});

//商品の購入個数選択start
const qtest = $('#quantity')
const quantity = qtest.get(0);
$('#plus').on('click',function(){
  var sum = 1;
  sum = quantity.value++;
  console.log(sum);
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

  console.log(quantity);
});

//お気に入りに追加
var like = $('.add_like')
like.on('click',function(){
  alert("お気に入り");
});
