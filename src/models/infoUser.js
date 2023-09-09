const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("infoUser", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pasTurns: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        turnsTakedIt: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        turnsFailed: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        turnsCancel: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        totalPay: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        loseForFail: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        totalTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        loseTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        averageAssists: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        class: {
            type: DataTypes.ENUM("A", "B", "C", "D", "E", "new"),
            allowNull: true,
        },

    },
        {
            timestamps: false
        });
};