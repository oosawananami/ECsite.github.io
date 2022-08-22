$(function(){
  var getjson = localStorage.getItem('buy');
  var item = JSON.parse(getjson); //JSON文字列取得

  //カートに商品が入っているか判定
  if(item == null){
    $('.cart_wrap').hide();
    $('.cart_0').show();

    $('.total').text(0);
  }else{
    $('.cart_0').hide();

    for(var i = 0; i < item.length; i++){
      console.log(item[i]);
      var cw = $('.cart_wrap.'+ String(i-1))

      if(i >= 1){ //データ量が増えたら要素を複製する
        cw.clone(true).removeClass(String(i-1)).addClass(String(i)).insertAfter(cw);
      }
      //それぞれの要素のi番目にクラスを追加
      $('.cart_item_name').eq(i).addClass(String(i));
      $('.cart_item_price').eq(i).addClass(String(i));
      $('.c_img').eq(i).addClass(String(i));
      $('.quantity').eq(i).addClass(String(i));
      $('.cart_item_subtotal').eq(i).addClass(String(i));

      //選択した商品のデータをあてる
      $('.cart_item_name.' + String(i)).text(item[i].name);
      $('.cart_item_price.' + String(i)).text(item[i].data);
      $('.c_img.' + String(i)).attr("src",item[i].img);
      $('.quantity.' + String(i)).val(Number(item[i].num));

      //小計計算
      const money = item[i].data.split("\\")[1];
      const sum = Number(money) * Number(item[i].num);

      $('.cart_item_subtotal.' + String(i)).text(sum);
}

    //合計計算

    $('.total').text();

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
      const aaa = $('.remove_item').index(this);//何番目かの確認
      item.splice(aaa,1);//配列から削除

      const setjson = JSON.stringify(item); // JSON形式に変換
      localStorage.setItem('buy',setjson);//ローカルストレージに再度保存
    }
    window.location.reload();
  });

  //購入ボタン押下
  $('.perchase').on('click',function(){
    if(item == null){
      alert("カートが空です");
    }else{
      alert("ご購入ありがとうございました！！！");

      localStorage.clear();
      window.location.reload();
    }
  });


});
