export class SqliteTables {
    public tables(): string {
        return `CREATE TABLE IF NOT EXISTS 'apikeys' (
            'user' varchar(30) NOT NULL,
            'apikey' varchar(100) NOT NULL,
			PRIMARY KEY ('user')
          );    
          CREATE TABLE IF NOT EXISTS 'configurations' (
            'path' varchar(200) NOT NULL,
            'enabled' tinyint(1) NOT NULL DEFAULT 1,
            'warningInterval' int(11) NOT NULL DEFAULT 1500,
            'errorInterval' int(11) NOT NULL DEFAULT 3000,
            'criticalInterval' int(11) NOT NULL DEFAULT 6000,
			PRIMARY KEY ('path')
          );
          CREATE TABLE IF NOT EXISTS 'events' (
            'path' varchar(200) NOT NULL,
            'timestamp' datetime NOT NULL,
            'level' int(11) NOT NULL,
            'message' varchar(500) NOT NULL,
			PRIMARY KEY ('path')
          );`
    }
}