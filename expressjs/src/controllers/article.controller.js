import { artcileService } from "../services/article.service.js";

export const articleController = {
    async findAll(request, response, next) {
        const result = await artcileService.findAll();
        response.json(result);
    },
};
