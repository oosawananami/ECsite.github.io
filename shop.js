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

  //3つ目のパラメータ―（画像）を取得
  const param3 = (String(param.split('&')[2]));

  const prm_img = (String(param3)).split("=");
  $('.p_img').attr("src",prm_img[1]);

  //商品の購入個数選択start
  const qtest = $('#quantity')
  const quantity = qtest.get(0);
  $('#plus').on('click',function(){
    var sum = 1;
    sum = quantity.value++;
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
    //商品の情報をローカルストレージに保存する
    localStorage.setItem('buy_name',prm_txt[1]);//商品名
    localStorage.setItem('buy_price',prm_price[1]);//商品単価
    localStorage.setItem('buy_num',qtest.val());//購入数
    localStorage.setItem('buy_img',prm_img[1]);//商品画像

    alert("カートに追加しました。");
  });

  //お気に入りに追加
  var like = $('.add_like')
  like.on('click',function(){
    if($(this).hasClass('change')){
      $(this).removeClass('change');

      localStorage.removeItem('like_name',prm_txt[1]);//商品名
      localStorage.removeItem('like_price',prm_price[1]);//商品単価
      localStorage.removeItem('like_img',prm_img[1]);//商品画像
    }else{
      $(this).addClass('change');

      localStorage.setItem('like_name',prm_txt[1]);//商品名
      localStorage.setItem('like_price',prm_price[1]);//商品単価
      localStorage.setItem('like_img',prm_img[1]);//商品画像
    }
  });

});
