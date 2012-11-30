(function() {

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
   var Direccion =  $('#Direccion').val();
   var Telefono =  $('#Telefono').val();
   var email =  $('#email').val();
   var monto_donado =  $('#monto_donado').val();
  
   var entry = new donar({ direccion: Direccion, nombre: nombre, tipo_documento: tipo_documento, 
   documento: documento, telefono: Telefono, email: email, monto_donado: monto_donado  });
    entry.create();
    
    console.log("exacto");
  
});




var donar = StackMob.Model.extend({ schemaName: 'donar' });

     $('#donacion').click(function(e) {
   e.preventDefault();
   
   var nombres = $('#nombres').val();
   var producto = $('#producto') .val();
   var direccion =  $('#direccion').val();
   var telefono =  $('#telefono').val();
   var Email =  $('#Email').val();
   
    var entry = new donar({ nombre: nombres, producto: producto, direccion: direccion, telefono: telefono, email: Email });
    entry.create();
    
    console.log("exacto");
  
});



var adoptar = StackMob.Model.extend({ schemaName: 'adoptar' });

$('#adoptar').click(function(e) {
   e.preventDefault();
   
   var name = $('#name').val();
   var tipodocumento = $('#tipodocumento') .val();
   var numer =  $('#numer').val();
   var tel =  $('#tel').val();
   var dicc =  $('#dicc').val();
   var correo =  $('#coreo').val();
   
    var entry = new adoptar({ nombre: name, tipdocumento: tipodocumento, documento: numer, telefono: tel, email: correo, direccion: dicc });
    entry.create();
    
    console.log("exacto");
  
});



  $('#create-coderiser').click(function(e) {
    e.preventDefault();

    var Coderiser = StackMob.Model.extend({ schemaName: 'coderisers' });
    var entry = new Coderiser({ name: 'Coderiser :D', passions: [ 'code', 'fun', 'javascript', 'html', 'css' ] });
    entry.create();

    console.log("Created a coderiser in StackMob server");

    coderisers = new Coderiser();

    coderisers.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });

  });
