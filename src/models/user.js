const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        celNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        vip: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        spamHour: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        spamDay: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        spamService: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    
    },
        {
            timestamps: false
        });
};