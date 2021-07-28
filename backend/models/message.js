'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url_image: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });

Message.associate = function (models) {
  //Associations can be define here//
  Message.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
    onDelete: 'CASCADE', 
  });
  Message.hasMany(models.Answer, {
    foreignKey: 'messageId',
    as: 'answers', //Sequelize defaults to using the pluralized model name//
    
  }); 
}
  return Message;
};
