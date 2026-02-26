
// FE đã sử dụng format rồi thì
// Không nên thay đổi key
// Không nên xoá key
// Chỉ nên thêm key

export const responseSuccess = (data, message = "OK", statusCode = 200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc: "swagger.com",
    };
};
