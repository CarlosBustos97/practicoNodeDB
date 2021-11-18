const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserChema = {
    id:{
        allowNull: false, //Permite decir si es falso o no
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model{
    static associate(){
        //Se define las relaciones
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserChema, User };