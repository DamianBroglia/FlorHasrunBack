const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        minimalDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration: {
            type: DataTypes.ENUM("30", "60", "90"),
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        view: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    },
        {
            timestamps: false
        });
};
