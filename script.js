const test = document.getElementById("quantity");

$(function(){
  $("header").load("header.html");
  $("footer").load("footer.html");
});

$('#plus').on('click',function(){
  test.value++
});

$('#minus').on('click',function(){
  if(test.value >= 2){
    test.value--
  }else{
    test.value = 1;
  }
});


var add = $('.add_cart')
add.on('click',function (){
  alert("カートに追加しました");
});

var like = $('.add_like')
like.on('click',function(){
  alert("お気に入り");
});
