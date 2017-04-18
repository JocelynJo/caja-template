var Cajas = {
resize: function(clase) {
  var heights = $(clase).map(function() {
      return $(this).height();
  }).get();
  maxHeight = Math.max.apply(null, heights);
  var heightsCajaText = $(clase+ ' .caja-col-text').map(function() {
      return $(this).height();
  }).get();
  maxHeightCajaText = Math.max.apply(null, heightsCajaText);
  $(clase+ ' .caja-col-text').height(maxHeightCajaText);
  $(clase).height(maxHeight+maxHeightCajaText);
  return;
},
clear: function(clase) {
  $(clase).height('auto');
  $(clase+ ' .caja-col-text').height('auto');
  return;
},
  imagen: function(clase){
    $(clase + " img").each(function () {
      $(this).load(function () {
        Cajas.clear(clase);
        Cajas.resize(clase);
      });
    });
  }
};