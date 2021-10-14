import fs = require('fs');

import { SqliteTables } from "./SqliteTables"
import { DataProvider } from "../DataProvider"
import { ApiKey } from "../../types/ApiKey"
import { Configuration } from "../../types/Configuration"
import { DataSet } from "../../types/DataSet"

const Database = require('better-sqlite3');


export class SqliteDataProvider implements DataProvider {
    private readonly db;
    constructor(private readonly filename: string, private readonly tables: SqliteTables) {
        this.db = new Database(this.filename, { verbose: console.log });
        this.db.exec(this.tables.tables())
    }

    apiKeys(): ApiKey[] {
        const statement = this.db.prepare('SELECT user, apikey FROM apikeys');
        const result = []
        for (const entry of statement.all()) {
            result.push(new ApiKey(entry.user, entry.apikey))
        }
        return result
    }
    configurations(): Configuration[] {
        throw new Error("Method not implemented.");
    }
    dataSets(): DataSet[] {
        throw new Error("Method not implemented.");
    }
    addOrReplaceApiKey(apiKey: ApiKey) {
        const statement = this.db.prepare('INSERT INTO apikeys (user, apikey) VALUES (?, ?)');
        statement.run(apiKey.user, apiKey.key)
    }
    addOrReplaceConfiguration(config: Configuration) {
        throw new Error("Method not implemented.");
    }
    addOrReplaceDataSet(data: DataSet) {
        throw new Error("Method not implemented.");
    }
}       