const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("turn", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateInit: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hourInit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cancel: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        state: {
            type: DataTypes.ENUM("toTake", "takedIt", "failed", "canceled"),
            allowNull: true
        }

    },
        {
            timestamps: false
        });
};