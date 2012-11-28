(function() {

  StackMob.init({
    appName: "dossg",
    clientSubdomain: "sebasbecohotmailcom",
    publicKey: "f06020df-4357-42c5-8ac2-0b8277add26c",
    apiVersion: 0
  });
  
  $('#donar').click(function(e) {
   e.preventDefault();

   
});​

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
