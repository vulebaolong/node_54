import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Article = sequelize.define(
    "Article", // model name: tên cục bộ sử dụng trong sequelize
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        views: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "Articles",
        timestamps: false,
    },
);

export default Article
