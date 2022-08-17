$(function(){
  var okininame = localStorage.getItem('like_name');
  var okiniprice = localStorage.getItem('like_price');
  var okiniimg = localStorage.getItem('like_img');

  if(okininame == null){
    $('.okini_0').show();
    $('.okini_wrap').hide();
  }else{
    $('.okini_0').hide();

    $('.o_img').attr('src',okiniimg);
    $('.okini_name').text(okininame);
    $('.okini_price').text(okiniprice);
  }

  $('.okini_wrap').on('click',function(back_event){
    window.location.href = 'shop.html' + "?name=" + okininame + "&price=" + okiniprice + "&img=" + okiniimg;
  });

});
