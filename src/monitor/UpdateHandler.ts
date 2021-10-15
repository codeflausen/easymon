
export class UpdateHandler {
    public handle(user: string, key: string, level: number, message: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (user == "martin") {
                resolve("OK")
            } else {
                reject("NOK")
            }
            
        });
    }
}