import { responseSuccess } from "../common/helpers/response.helper.js";
import { artcileService } from "../services/article.service.js";

export const articleController = {
    async findAll(req, res, next) {
        console.log("articleController", req.payload);
        const result = await artcileService.findAll(req);
        const response = responseSuccess(result, "Lấy danh sách artcile thành công", 201);
        res.status(response.statusCode).json(response);
    },
};
