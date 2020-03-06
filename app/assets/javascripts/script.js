// alert($("h6").text());

if (window.matchMedia( "(max-width: 670px)" ).matches) {
  $(function(){
    $('.flow-chart__wrapper__top').click(function(){
      // $('.flow-chart__wrapper__top__right').slideDown();
      // $('.flow-chart__wrapper__top__right').slideUp();
      var $answer =$(this).find('.answer-a');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      } else {
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
        
      }
    });
  });
}else{
  $(function(){
    $('.answer-a').show();
  })};

$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();
  //◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  }
});
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
  });
});

