import "reflect-metadata"
import { DataSource } from "typeorm"
import { Appeal } from "./entity/Appeal"
import { AppealHistory } from "./entity/AppealHistory"
import { AppealSubscriber } from "./subscriber/AppealSubscriber"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Appeal,AppealHistory],
    migrations: [],
    subscribers: [AppealSubscriber],
})
