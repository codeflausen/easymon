import { DataProvider } from "./db/DataProvider"
import { SqliteDataProvider } from "./db/sqlite/SqliteDataProvider"
import { SqliteTables } from "./db/sqlite/SqliteTables";
import { ApiKey } from "./types/ApiKey";

const dataProvider: DataProvider = new SqliteDataProvider("./db.sqlite", new SqliteTables())
dataProvider.apiKeys().forEach(entry => {
    console.log(entry.user + " => " + entry.key )
})