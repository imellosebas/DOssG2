(function() {

  StackMob.init({
    appName: "dossg",
    clientSubdomain: "sebasbecohotmailcom",
    publicKey: "f06020df-4357-42c5-8ac2-0b8277add26c",
    apiVersion: 0
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
        
        adoptar = new adoptar();

    adoptar.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });

      
    });
})();
