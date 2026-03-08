import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";
import { tokenService } from "./token.service.js";

export const authService = {
    async register(req) {
        // nhận dữ liệu từ FE gửi lên
        const { email, password, fullName } = req.body;

        // kiểm tra email có tồn tại trong db hay không
        const userExits = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        // nếu người dùng tồn tại thì từ chối
        if (userExits) {
            throw new BadRequestException("Người dùng đã tồn tại, vui lòng đăng nhập");
        }

        // HASH: băm => bcrypt
        // không thể dịch ngược
        // so sánh

        // ENCRYPTION: mã hoá
        // dịch ngược

        const passwordHash = bcrypt.hashSync(password, 10);

        // tạo mới người dùng vào db
        const userNew = await prisma.users.create({
            data: {
                email: email,
                password: passwordHash,
                fullName: fullName,
            },
        });

        // console.log({ email, password, fullName, userExits, userNew });

        return true;
    },

    async login(req) {
        // nhận dữ liệu
        const { email, password } = req.body;

        // kiểm tra email xem tồn tại chưa
        // nếu chưa tồn tại => từ chối, kêu người dùng đăng ký
        // nếu mà tồn tại => đi xử lý tiếp
        const userExist = await prisma.users.findUnique({
            where: {
                email: email,
            },
            omit: {
                password: false,
            },
        });

        if (!userExist) {
            // throw new BadRequestException("Account Invalid.");
            throw new BadRequestException("Người chưa tồn tại, vui lòng đăng ký");
        }

        const isPassword = bcrypt.compareSync(password, userExist.password); // true

        if (!isPassword) {
            // throw new BadRequestException("Account Invalid..");
            throw new BadRequestException("Mật khẩu khống chính xác");
        }

        const accessToken = tokenService.createAccessToken(userExist.id);

        // console.log({ email, password, userExist, isPassword });

        return {
            accessToken: accessToken,
            refreshToken: "refreshToken",
        };
    },

    async getInfo(req) {
        // console.log("getInfo service", req.user);

        return req.user;
    },
};
