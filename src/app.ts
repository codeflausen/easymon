import { DataProvider } from "./db/DataProvider"
import { SqliteDataProvider } from "./db/sqlite/SqliteDataProvider"

const dataProvider: DataProvider = new SqliteDataProvider("./db.sqlite")