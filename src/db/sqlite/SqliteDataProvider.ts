import fs = require('fs');

import { DataProvider } from "../DataProvider"
import { ApiKey } from "../../types/ApiKey"
import { Configuration } from "../../types/Configuration"
import { DataSet } from "../../types/DataSet"

const Database = require('better-sqlite3');


export class SqliteDataProvider implements DataProvider {

    constructor(private readonly filename: string) {
        this.init()
    }

    apiKeys(): ApiKey[] {
        throw new Error("Method not implemented.");
    } configurations(): Configuration[] {
        throw new Error("Method not implemented.");
    }
    dataSets(): DataSet[] {
        throw new Error("Method not implemented.");
    }
    addOrReplaceApiKey(key: ApiKey) {
        throw new Error("Method not implemented.");
    }
    addOrReplaceConfiguration(config: Configuration) {
        throw new Error("Method not implemented.");
    }
    addOrReplaceDataSet(data: DataSet) {
        throw new Error("Method not implemented.");
    }

    private init() {
        if (fs.existsSync(this.filename)) {
            return;
        }
        const db = new Database(this.filename, { verbose: console.log });
        db.exec("CREATE TABLE test (id);")

    }
}  