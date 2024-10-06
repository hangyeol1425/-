require('dotenv').config();
import "reflect-metadata";
import { initializeDatabase, Nedb } from "./data-source";
import express, { Request, Response } from 'express';
import cors from "cors";

const PORT = process.env.PORT || 3000;
const SERVER_NAME = process.env.SERVER_NAME || "TEST_SERVER";

const app = express();
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());

const chessArt = `  ♜  ♞  ♝  ♛  ♚  ♟  ♟  ♟  ♖  ♘  ♗  ♕  ♔  ♙  ♙  ♙`;

const startServer = async () => {
    await initializeDatabase();

    app.listen(PORT, () => {
        console.log("=".repeat(50));
        console.log(chessArt);
        console.log("=".repeat(50));
        console.log("🟢  서버가 성공적으로 시작되었습니다!  🟢");
        console.log(`\x1b[33m✨  서버 이름  : ${SERVER_NAME}\x1b[0m`);
        console.log(`\x1b[36m🌐  서버 주소  : http://localhost:${PORT}\x1b[0m`); // 템플릿 리터럴을 사용하여 색상 일관성 유지
        console.log(`\x1b[31m🚩  허용된 CORS 서버 : ${corsOptions.origin}\x1b[0m`); // CORS 허용된 서버 주소 출력
        console.log(`\x1b[30m🛠️   현재 환경 : ${process.env.NODE_ENV}\x1b[0m`);
        console.log("=".repeat(50));
        console.log(`\x1b[35m📅  서버 시작 시간 : ${new Date().toLocaleString()}\x1b[0m`); // 서버 시작 시간 출력
        console.log("=".repeat(50));
        console.log(chessArt);
        console.log("=".repeat(50) + "\n");
    });
};

startServer();