module.exports = function (transporter){

  return {
    send: function (req, res) {
      var Nome = req.body.Nome;
      var Email = req.body.Email;
      var Mensagem = req.body.Mensagem;

      console.log(Nome + Email + Mensagem);

      var mailOptions = {
        from: '"Contato Neofield" <neofield.contato@gmail.com>',
        // from: '"Contato RafaelShoes" <brandao.rafael@hotmail.com>',
        to: 'neofield.contato@gmail.com',
        subject: 'Contato de ' + Email,
        text: 'Mensagem de ' + Email + ':\n\n' + Mensagem
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