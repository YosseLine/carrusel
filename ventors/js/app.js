$(document).ready(function(){
var imgItems = $('.slider li').length; //Número de slides

//Agregando pagination
for(var i= 0; i<imgItems; i++){
  $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
}
  $('.slider li').hide(); //Ocultando todos los slides
  $('.slider li:first').show(); //Mostrando el primer slide
  $('.pagination li span:first').css({'color':'rgb(126,214,224)'}); //Damos estilos al primer span de pagination

//Ejecutamos las Funciones

$('.pagination li').click(function(){
  var paginationPos = $(this).index() + 1;
  $('.slider li').hide()
  $('.slider li:nth-child('+ paginationPos +')').fadeIn(); //Mostramos el slide seleccionado

  //Dando estilos
/*  $('.pagination li span').css({'color':'#FFF'});*/
  $(this).css({'color':'rgb(126,214,224)'});
});

$('.fa-chevron-right').click(function(){

});
});

/*
var loadPage = function(){
  //Elementos
  var $buttons = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');

  //Eventos
  $buttons.click(changeImage);
  $previous.click(previousImage);
  $next.click(nextImage);
};

//Funciones

var changeImage = function(){
  target = parseInt($(this).data('target'));
  showImage(target);
};

var previousImage = function(e){
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  showImage(target);
};

var nextImage = function(e){
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  showImage(target);
};

var showImage = function(target){
  var $lastSlide = $('div.active');
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass =('active');
  $slide.addClass =('active');
};*/
