$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
  // alert("描画完了");
  const price =  $('p').data(price);
  console.log(price);
});


$('#addcart').on('click',function (){
  alert("カートに追加しました");
});
