export const appError = (err, req, res, next) => {
    console.log("mid đặc biệt bắt lỗi", err);

    const obj = {
        level1: 1,
        level2: 2,

    }
    console.log(obj.level2);


    const tenkey = "level1"
    console.log(

        
        obj?.[tenkey]
    
    
    );

    res.status(500).json(err?.stack);
};
