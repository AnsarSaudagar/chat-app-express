'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  },
    // {
    //   hooks: {
    //     beforeCreate: async (user, options) => {
    //       extendSequelize([User], {
    //         createdBy: enhanceCreatedBy(),
    //       });
    //       console.log(options);
    //       // user.createdBy = user.updatedBy = (await sequelize.query('SELECT CURRENT_USER'))[0].CURRENT_USER;
    //     },
    //     beforeUpdate: async (user) => {
    //       user.updatedBy = (await sequelize.query('SELECT CURRENT_USER'))[0].CURRENT_USER;
    //     }
    //   }
    // }
  );


  return User;
};