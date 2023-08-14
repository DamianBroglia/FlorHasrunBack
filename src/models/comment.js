const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        EditDate: {
            type: DataTypes.DATE,
        },
    },
        {
            timestamps: false
        });
};