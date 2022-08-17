$(function(){
  var itemname = localStorage.getItem('buy_name');
  var itemprice = localStorage.getItem('buy_price');
  var num = localStorage.getItem('buy_num');
  var img = localStorage.getItem('buy_img');

  //小計計算
  const money = (String(itemprice)).split("\\")[1];
  const sum = Number(money) * Number(num);

  //カートに商品が入っているか判定
  var length = localStorage.length;
  if(length == 0){
    $('.cart_wrap').hide();
    $('.cart_0').show();

    $('.total').text(0);
  }else{
    $('.cart_0').hide();
    
    $('.cart_item_name').text(itemname);
    $('.cart_item_price').text(itemprice);
    $('.c_img').attr("src",img);
    $('#quantity').val(Number(num));
    //小計
    $('.cart_item_subtotal').text(sum);
    //合計計算
    $('.total').text(sum);
  }
  //ここまでが画面表示時の挙動

  //小計金額更新
  $('#plus').on('click',function(){
    const plus = $('#quantity').val();
  $('.cart_item_subtotal').text(Number(money) * Number(plus));
});

  $('#minus').on('click',function(){
    const minus = $('#quantity').val();
  $('.cart_item_subtotal').text(Number(money) * Number(minus));
});

  //合計金額更新
  $('.fa-arrows-rotate').on('click',function(){
    const sum = Number(money) * Number($('#quantity').val());
    $('.total').text(sum);

  });

  //削除ボタン押下
  $('.remove_item').on('click',function(){
    if(!confirm('この商品をカートから削除してもよろしいですか？')){
      return false;
    }else{
      // localStorage.clear(); ←すべてクリアしたいとき
      localStorage.removeItem('buy_name');
      localStorage.removeItem('buy_price');
      localStorage.removeItem('buy_num');
      localStorage.removeItem('buy_img');
    }
    window.location.reload();
  });

  //購入ボタン押下
  $('.perchase').on('click',function(){
    alert("ご購入ありがとうございました！！！");

    localStorage.removeItem('buy_name');
    localStorage.removeItem('buy_price');
    localStorage.removeItem('buy_num');
    localStorage.removeItem('buy_img');
    window.location.reload();
  });


});
