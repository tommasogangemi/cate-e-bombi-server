import { Request, Response } from 'express'
import { CLIENT_EMAIL, PRIVATE_KEY, PRIVATE_KEY_ID, decodeKey } from './../keys'

const google = require('googleapis')
const express = require('express')
const router = express.Router()

// configure a JWT auth client
let jwtClient = new google.Auth.JWT({
  key: decodeKey(PRIVATE_KEY),
  keyId: decodeKey(PRIVATE_KEY_ID),
  email: decodeKey(CLIENT_EMAIL),
  // key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCb5/k+Ku5I4G5F\n+iwk2tuWC1eNWLmZL4czUg8lQkmwGwKLeiKl5cebLcRK2wYkIQ58oNpKMmnas4F+\n9hBg8UzS81L9UsxQcXF4FMAYGspkgWhen+WJES68fXD4F6AP53BsaXCB2haMY2da\nWAl8aHt0o5rKZQwCspyUtV97sNdoK/zTP4Pz3tjW/j2sZeqAMwrSK6tfxj0cmlD0\npFAwFx/x3OyAOOiq+hwtFUo956qMNypF3VljwT0JJeJduJM+UbjHqEwq/Lp6h/xs\nMtqJJfRbjIAZUZGxHBvgQnZ95Tvn1yI0bu/dlLQA8XcvWC3PGh6EkQwm8memeo5u\n8JJkamy9AgMBAAECggEAEMceTLkogwm5/Ehfq0itNGC8l466jHhvq49zZ05SqUPC\n2pk2dNV9TV8XvnmDF+zBxxo1W6JAv4MtVqkq2o/lNVdvsSjRqX+H10UeZgmuCbJe\ndb5t4HoLpke2mlBKjqOYtuYC8Ep0vj9tTizmum9xB7yaihjlOb4YeS1qnOBLUh+s\ntIQBagsh73e79Lub1OzcM54CAl6auQ+YFopDplsX2gLlwpdk2uk+SFJv005GLi5x\nc6RSd/BHFj5m9+Nu9ICnNX+u8yh+tYs2L9qzUuVtpi/pDRw+ly1b453bHgbche5r\nggkt/YL/E9R6wXiEfgsNTB82g0leTidlEtFTaDWS2QKBgQDOOmJuUCv0ubLqCrT4\nxmlKSIc+T06J5OsaebDKye1HLVDpCENOpTSbeJpe4RJe3dfPCoGf4xqQILVzOv0U\nLBM3h+H0+gPN3GNmD/hsSb213EpIogd+jVoCCRRuwPfExU7BeXVwsewlA+6m2CdW\nO0Kg0temn05fa+YBPbhlj9VT6QKBgQDBiH6j01syNKn3lyTw3xq8t9eHZNHcVkf3\nlImdddEzIvwqCRdHamUPsGp4mRfZLAWyG5jGD6yLsdIBFoo1okUxtLG3V1K2Qp7i\nfiJzDbvDkfDa+Bc9yJIV4ozgkVf60CN4znpYImAvtm/N4hocpCD7XD4GM9egU0YT\niDqplcKxtQKBgB09Ue9qFpFgMunUEsyi9RK/Lc272NrcRik+z74w2x+YYTxpG4Hv\nEoJomxqQttYUhiCo0LAmtwFwYcmwt2lAxoi9D2B4gkmR0dYKtaJE4k0CqtWZg46B\n5B0dxHPfkEGp5/yuh+Quldi5sgCd7RXg2RWMT18kfywwVDAg3CAqQIjhAoGAI+u1\ntaqRDqx/r5i6HosKZ2Sn+FVaLk9FZEqJkFRB0//2VccCLxssTtErsd6YcpKdLAW7\nQWe/Wt5SYClS1cmcljE3mxP2IiYTX26R7lDqPM5lqf7KMYl8s9ss0rGnZsIjE1Uf\nmCQpPjHaZphEyHQeOwlP6c7NgtBx/UYXvUoyrNECgYBxqJR8MpcTNk8HmcDfxuxC\nxUJzpt9QmcFMRkI3khgtH/GRDJSnVoe0cTiqOhp2IbxnDL7CxM147e0qbp0QFEqb\nRTCnDW0Esyr7BJFLXOPkiur90v5vvxK2uq1PBMKzF/dhupnDs4oP+FaraHHrpqyp\naqbrj5ardmqtpFuNfXOqCA==\n-----END PRIVATE KEY-----\n',
  // keyId: '9f3b45cbc17a22f17546311e3e028a4f8bd6fc56',
  // email: 'tommaso-gangemi@cate-e-bombi.iam.gserviceaccount.com'
  scopes: 'https://www.googleapis.com/auth/spreadsheets'
})

router.get('/', async (req: Request, res: Response) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET')
  res.append('Access-Control-Allow-Headers', 'Content-Type')

  const authorization = await jwtClient.authorize()

  return res.status(200).json(authorization)
})

module.exports = router
