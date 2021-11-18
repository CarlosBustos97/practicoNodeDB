//Aqui van todos los modelos que se creen 

const {User, UserChema} = require('./user.model');

function setupModels(sequelize){
    User.init(UserChema, User.config(sequelize));
}

module.exports = setupModels;