//alert('SWE KÍNH CHÀO CÁC BẠN !')

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll>500){
    $('.croll').fadeIn(500);
  }else{
    $('.croll').fadeOut(500);
  }
  console.log(scroll)
});

$( ".col-left" ).bind( "click", function() {
  //alert( "User clicked on 'foo.'" );

  $('.header_top .col-right').fadeToggle()
});
