import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { CLIENT_EMAIL, PRIVATE_KEY, PRIVATE_KEY_ID, decodeKey } from './keys'
const google = require('googleapis')

dotenv.config()

// configure a JWT auth client
let jwtClient = new google.Auth.JWT({
  key: decodeKey(PRIVATE_KEY),
  keyId: decodeKey(PRIVATE_KEY_ID),
  email: decodeKey(CLIENT_EMAIL),
  scopes: 'https://www.googleapis.com/auth/spreadsheets'
})

const app: Express = express()
const port = process.env.NODE_ENV === 'development' ? 5000 : ''

app.get('/token', async (req: Request, res: Response) => {
  const authorization = await jwtClient.authorize()

  res.send(JSON.stringify(authorization))
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
