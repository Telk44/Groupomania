const { Message } = require('../models/index');

// Création d'un message 
exports.createMessage = (req, res, next) => {
     let imageUrl = null;
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } 
    const message = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        url_image: imageUrl
    }; 
    Message.create(message)
        .then(() => res.status(201).json({ message: "Message envoyé!" }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteMessage = (req, res, next) => {
  Message.findOne({ where: { id: req.params.id }}) 
      .then((message) => {
          if(message.url_image === null){
               Message.destroy({ where: { id: req.params.id } }) 
              .then(() => res.status(200).json({ message: 'Message supprimé' }))
          }else {
              const filename = message.url_image.split('/images/')[1];
              fs.unlink(`images/${filename}`, () => {
                Message.destroy({where: {id: req.params.id}})
                  .then(message => {res.status(200).json({message: "Message supprimé"});
                  })
                  .catch(error => res.status(400).json({error}));
                })
            }
          })
          .catch(error => res.status(500).json({error}));
}
//sans image
/* exports.deleteMessage = (req, res, next) => {
  Message.findOne({ where: { id: req.params.id }})
      .then((message) => {
          Message.destroy({ where: { id: req.params.id } }) 
              .then(() => res.status(200).json({ message: 'Message supprimé' }))
              .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
}; */

// Obtention d'un message 
exports.getOneMessage = (req, res, next) => {
    db.Messages.findByPk(req.params.id,
        {
            include: [
                {
                    model: db.Users,
                    attributes: ['firstname', 'lastname']
                },
                {
                    model: db.Answers,
                    attributes: ['content'],
                    include: { model: db.Users, attributes: ['firstname', 'lastname'] }
                },
            ]
        }
    )
        .then(message => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

// Obtention des messages 
exports.getAllMessages = (req, res, next) => {     
    Message.findAll({
        include: ["user", "answers"],
        order: [['createdAt', 'DESC']]
    }
    )
        .then((messages) => res.status(200).json(messages))
        .catch(error => res.status(400).json({ error }));
};

//Modifier un message/A vérifier 
exports.updateOnePost = (req, res, next) => {
    Message.update({
        title: req.body.title,
        content: req.body.content,
        url_image: req.body.url_image
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(response => res.status(200).json({
        message: "Message bien modifié"
      }))
      .catch(error => console.log("ERREUR updateValue"));
  }
  





