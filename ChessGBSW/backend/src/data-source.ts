import "reflect-metadata";
import path from 'path';
import { DataSource } from "typeorm";
import Datastore from 'nedb';

const entitesPath = path.join(__dirname, `entity/*.ts`);
const nedbPath = path.join(__dirname, `./*.db`);

export const Nedb = new Datastore ({ filename: './nedb.db', autoload: true });

export const AppDataSource = new DataSource({
    type: "sqlite", // 데이터베이스 타입을 sqlite로 설정
    database: "database.sqlite", // SQLite 데이터베이스 파일 이름 (또는 경로)
    synchronize: true, // 애플리케이션이 시작될 때 엔티티와 데이터베이스 스키마를 동기화
    logging: false, // SQL 쿼리를 로그에 기록할지 여부
    entities: [
        entitesPath
    ],
    migrations: [], // 마이그레이션
    subscribers: [] // 구독자
});

export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("\n" + "=".repeat(50));
        console.log("\x1b[1m📄  데이터베이스 알림 로그  📄\x1b[0m");
        console.log(`-  데이터베이스(SqlLite)가 정상적으로 연결되었습니다`);
        console.log(`-  데이터베이스(SqlLite)의 엔티티 파일 경로 : ${entitesPath}`);
        console.log(`-  데이터베이스(NeDB)의 파일 경로 : ${nedbPath}`)
        console.log("=".repeat(50) + "\n");
    } catch (error) {
        console.error("\x1b[31m데이터베이스 연결 오류:\x1b[0m", error);
    }
};
