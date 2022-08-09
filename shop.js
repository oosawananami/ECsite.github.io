$(function(){
  const param = decodeURIComponent($(location).attr('search'));

  //1つ目のパラメータ―(商品名)を取得
  const param1 = (String(param.split('&')[0]));

  const prm_txt = (String(param1)).split("=");
  $('.product_name').text(prm_txt[1]);


  //2つ目のパラメータ―（値段）を取得
  const param2 = (String(param.split('&')[1]));

  const prm_price = (String(param2)).split("=");
  $('.producut_price').text(prm_price[1]);
});
