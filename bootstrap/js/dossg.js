
(function(){
    
   var StackMob=$();
   StackMob.init({
    appName: "dossg",
    clientSubdomain: "sebasbecohotmailcom",
    publicKey: "f06020df-4357-42c5-8ac2-0b8277add26c",
    apiVersion: 0
  });
  
  var donar = StackMob.Model.extend({ schemaName: 'donar' });
  
  $('#donar').click(function(e) {
   e.preventDefault();
   
   var nombre = $('#nombre').val();
   var tipo_documento = $('#tipo_documento') .val();
   var documento =  $('#documento').val();
   var direccion =  $('#Direccion').val();
   var telefono =  $('#Telefono').val();
   var email =  $('#email').val();
   var monto_donado =  $('#monto_donado').val();
  
   var entry = new donar({ direccion: direccion, nombre: nombre, tipo_documento: tipo_documento, 
   documento: documento, telefono: telefono, email: email, monto_donado: monto_donado });
    entry.create();
    
    console.log("exacto");
  
});




var donacion = StackMob.Model.extend({ schemaName: 'donar' });

     $('#donacion').click(function(e) {
   e.preventDefault();
   
   var nombres = $('#nombres').val();
   var producto = $('#producto') .val();
   var direccion =  $('#direccion').val();
   var telefono =  $('#telefono').val();
   var Email =  $('#Email').val();
   
    var entry = new donacion({ nombre: nombres, producto: producto, direccion: direccion, telefono: telefono, email: Email });
    entry.create();
    
    console.log("exacto");
  
});



var adoptar = StackMob.Model.extend({ schemaName: 'adoptar' });

$('#adoptar').click(function(e) {
   e.preventDefault();
   
   var mascota = $('#mascota'). val();
   var name = $('#name').val();
   var tipodocumento = $('#tipodocumento') .val();
   var numer =  $('#numer').val();
   var tel =  $('#tel').val();
   var dicc =  $('#dicc').val();
   var correo =  $('#coreo').val();
   
    var entry = new adoptar({ nombre: name, tipdocumento: tipodocumento, documento: numer, telefono: tel, email: correo, direccion: dicc, mascota: mascota });
    entry.create();
    
    console.log("exacto");
  
});
        });
