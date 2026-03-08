import jwt from "jsonwebtoken";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { ACCESS_TOKEN_SECRET } from "../common/constant/app.constant.js";

export const tokenService = {
    createAccessToken(userId) {
        if (!userId) {
            throw new BadRequestException("không có userId để tạo token");
        }

        // accessToken <=> AT (ghi tắt)
        const accessToken = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET, { expiresIn: "1d" });

        return accessToken;
    },

    verifyAccessToken(acccessToken, option) {
        const decode = jwt.verify(acccessToken, ACCESS_TOKEN_SECRET, option);
        return decode
    },
};
