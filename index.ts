import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
const google = require('googleapis')

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', async (req: Request, res: Response) => {
  // const creds = await jwtClient.authorize()

  // console.log('aaaaaaaaaaaa', creds)

  // res.send(JSON.stringify(creds, undefined, 4))

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
