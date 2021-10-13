import { ApiKey } from "../types/ApiKey"
import { Configuration } from "../types/Configuration"
import { DataSet } from "../types/DataSet"

export interface DataProvider {
    apiKeys(): ApiKey[]

    configurations(): Configuration[]

    dataSets(): DataSet[]

    addOrReplaceApiKey(key: ApiKey)

    addOrReplaceConfiguration(config: Configuration)

    addOrReplaceDataSet(data: DataSet)
}