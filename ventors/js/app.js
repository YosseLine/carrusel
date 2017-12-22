$(document).ready(function(){
var imgItems = $('.slider li').length; //Número de slides
var imgPos = 1;
//Agregando pagination
for(var i= 0; i<imgItems; i++){
  $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
}
  $('.slider li').hide(); //Ocultando todos los slides
  $('.slider li:first').show(); //Mostrando el primer slide
  $('.pagination li span:first').css({'color':'rgb(126,214,224)'}); //Damos estilos al primer span de pagination

//Ejecutamos las Funciones
//Función para los botones
$('.pagination li').click(function(){
  var paginationPos = $(this).index() + 1;
  $('.slider li').hide()
  $('.slider li:nth-child('+ paginationPos +')').fadeIn(); //Mostramos el slide seleccionado

  //Dando estilos
  $('.pagination li span').css({'color':'#FFF'});
  $(this).css({'color':'rgb(126,214,224)'});

  imgPos = paginationPos;

});

//Función para la flecha de la derecha
$('.fa-chevron-right').click(function(){
  if(imgPos >= imgItems){
    imgPos = 1;
  } else{
    imgPos ++;
  }

  $('.pagination li span').css({'color':'#FFF'});
  $('.pagination li:nth-child('+ imgPos +')').css({'color':'rgb(126,214,224)'});

  $('.slider li').hide()
  $('.slider li:nth-child('+ imgPos +')').fadeIn();
});

//Función para la flecha de la izquierda.
$('.fa-chevron-left').click(function(){
  if(imgPos <= 1){
    imgPos = imgItems;
  } else{
    imgPos --;
  }

  $('.pagination li span').css({'color':'#FFF'});
  $('.pagination li:nth-child('+ imgPos +')').css({'color':'rgb(126,214,224)'});

  $('.slider li').hide()
  $('.slider li:nth-child('+ imgPos +')').fadeIn();
});
});
