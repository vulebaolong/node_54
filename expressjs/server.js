import express from "express";
import rootRouter from "./src/routers/root.router.js";

const app = express();

app.get("", (request, response, next) => {
    response.json("Hello world");
});

app.use("/api", rootRouter)


const PORT = 3069;
app.listen(PORT, () => {
    console.log(`Server online at port: ${PORT}`);
});

// js Version cũ: common-js
// const express =  required("express")

// ES6: phiên bản nâng cấp rất rất nhiều của js

// js Version mới: es-module
// import express from "express"
