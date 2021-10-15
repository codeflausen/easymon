import { UpdateHandler } from "../monitor/UpdateHandler"

export class RestServer {
    constructor(private port: number, private updateHandler: UpdateHandler) {

    }

    public startListen() {
        const express = require('express')
        const app = express()

        app.get('/update', (req, res) => {
            const user = req.query.user
            const key = req.query.key
            const level = req.query.level
            const message = req.query.message

            this.updateHandler.handle(user, key, level, message).then(msg =>
                res.send(msg)
            ).catch(e => {
                res.statusCode = 403
                res.send(e)
            }
            )
        })

        app.listen(this.port)
    }
}