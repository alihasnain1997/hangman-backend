'use strict';
const {
    Model
} = require('sequelize');
//const Model = sequelize['import'](modelFile)
module.exports = (sequelize, DataTypes) => {
    class Word extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Word.init({
        word: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Word',
        timestamps: false

    });
    return Word;
};