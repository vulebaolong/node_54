import sequelize from "../common/sequelize/connect.sequelize.js";
import Article from "../models/article.model.js";

export const artcileService = {
    async findAll() {
        // sequelize
        const resultSequelize = await Article.findAll();
        return resultSequelize;
    },
};
