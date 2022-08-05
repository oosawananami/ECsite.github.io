$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
  // alert("描画完了");
  const price =  $('p').data(price);
  console.log(price);
});


$(function add(){
  alert("カートに追加しました");
});
