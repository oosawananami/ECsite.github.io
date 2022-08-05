$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
  // alert("描画完了");
  const price =  $('p').data(price);
  console.log(price);
});

var add = $('#addcart')

add.on('click',function (){
  event.preventDefault();　//リンクイベントを無効化
  alert("カートに追加しました");
});
