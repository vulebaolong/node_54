import { prisma } from "../common/prisma/connect.prisma.js";
import sequelize from "../common/sequelize/connect.sequelize.js";
import Article from "../models/article.model.js";

export const artcileService = {
    async findAll(req) {
        console.log("artcileService", req.payload);

        // sequelize
        const resultSequelize = await Article.findAll();
        const resultPrisma = await prisma.articles.findMany();
        return resultPrisma;
    },
};
