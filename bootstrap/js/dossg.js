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
       var direccion =  $('#Direccion').val();
       var telefono =  $('#Telefono').val();
       var email =  $('#email').val();
       var monto_donado =  $('#monto_donado').val();
       
         
      var entry = new donar({ direccion: direccion, nombre: nombre, tipo_documento: tipo_documento, 
       documento: documento, telefono: telefono, email: email, monto_donado: monto_donado });
        entry.create();
        
        console.log("exacto");
        
        donar = new donar();

    donar.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
      
    });
    
    StackMob.customcode('sendgrid/email', { 
            subject: 'Gracias', 
            from: 'dossg@outlook.com', 
            text: 'Gracias por escogerme te hare muy feliz', 
            usernames: ['julianduquej@gmail.com'], 
            emails: ['julianduquej@gmail.com'] 
        }, {
            success: function(result) {
                console.debug(result);
            },
            error: function(error) {
                console.log(error);
            }
        
    });
      
      alert('Gracias por tu colaboracion, el resto lo haremos por correo electronico -----soporte en: adopdossg@gmail.com  y  dossg@outlook.com');
      
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
        donacion = new donacion();

    donacion.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });
    
    StackMob.customcode('sendgrid/email', 
                      { subject: 'Gracias', from: 'dossg@outlook.com', text: 'Gracias por escogerme te hare muy feliz', emails:[ 'adopdossg@gmail.com'] }, 
                      {
            success: function(result){
                console.debug(result);
            }
        
    });
    
    alert('Gracias por tu colaboracion, el resto lo haremos por correo electronico -----soporte en: adopdossg@gmail.com  y  dossg@outlook.com');
    
      
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
    
     StackMob.customcode('sendgrid/email', 
                      { subject: 'Gracias', from: 'dossg@outlook.com', text: 'Gracias por escogerme te hare muy feliz', emails: ['adopdossg@gmail.com'] }, 
                      {
            success: function(result){
                console.debug(result);
            }
        
    });

    alert('gracias por escogerme te hare muy feliz---------El resto lo haremos por EMAIL------------soporte en: adopdossg@gmail.com  y  dossg@outlook.com');
      
    });
})();
