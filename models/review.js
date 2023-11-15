"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            review.belongsTo(models.User, {
                foreignKey: "userId",
                as: "user",
            });

            review.belongsTo(models.Book, {
                foreignKey: "bookId",
                as: "book",
            });
        }
    }
    review.init(
        {
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bookId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "review",
        }
    );
    return review;
};
