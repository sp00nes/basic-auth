
'use strict';

const userSchema = (sequelizeDatabase, DataTypes) => {
  const model = sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  model.beforeCreate((user) => {
    console.log('our user', user);
  });

  return model;
};

module.exports = userSchema;
