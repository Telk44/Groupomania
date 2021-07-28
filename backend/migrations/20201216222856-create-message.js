'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      url_image: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: "Users",
            key: "id",
            as: "userId"
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};