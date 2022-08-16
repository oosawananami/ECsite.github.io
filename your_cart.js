$(function(){
  var itemname = localStorage.getItem('buy_name');
  var itemprice = localStorage.getItem('buy_price');
  var num = localStorage.getItem('buy_num');

  //小計計算
  const money = (String(itemprice)).split("\\")[1];
  const sum = Number(money) * Number(num);

  //カートに商品が入っているか判定start
  var length = localStorage.length;
  if(length == 0){
    alert('カート内に商品がありません。');

    $('.cart_item_name').text(null);
    $('.cart_item_price').text(null);
    $('#quantity').val(0);
    $('.cart_item_subtotal').text(0);
    $('.total').text(0);
  }else{
    $('.cart_item_name').text(itemname);
    $('.cart_item_price').text(itemprice);
    $('#quantity').val(Number(num));
    //小計
    $('.cart_item_subtotal').text(sum);
    //合計計算
    $('.total').text(sum);
  }
  //ここまでが画面表示時の挙動

  //個数を変更するたびに小計を計算
  $('#plus').on('click',function(){
    const plus = $('#quantity').val();
  $('.cart_item_subtotal').text(Number(money) * Number(plus));
});

  $('#minus').on('click',function(){
    const minus = $('#quantity').val();
  $('.cart_item_subtotal').text(Number(money) * Number(minus));
});

  //合計
  $('.cart_item_subtotal').change(function(){
    alert("へんこう");
  });

  //削除
  $('.remove_item').on('click',function(){
    alert("sakujo");
    // localStorage.clear();
    localStorage.removeItem('buy_name');
    localStorage.removeItem('buy_price');
    localStorage.removeItem('buy_num');
    window.location.reload();
});
});
