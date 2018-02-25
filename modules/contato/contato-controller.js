module.exports = function (transporter){

  return {
    send: function (req, res) {
      var Nome = req.body.name;
      var Email = req.body.email;
      var Mensagem = req.body.message;
      var Telefone = req.body.phone;

      var mailOptions = {
        from: '"Contato Neofield" <neofield.contato@gmail.com>',
        // from: '"Contato RafaelShoes" <brandao.rafael@hotmail.com>',
        to: 'neofield.contato@gmail.com',
        subject: 'Contato de ' + Email,
        text: 'Mensagem de ' + Nome + " (Tel: " + Telefone + ")" + ':\n\n' + Mensagem
      };

      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        return res.json({success: true, message: 'Mensagem enviada.'});
      });
    }
  }
}