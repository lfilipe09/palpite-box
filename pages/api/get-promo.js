import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    //await doc.useServiceAccountAuth(credentials)
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    await sheet.loadCells('A3:B3')

    const mostrarPromocaoCell = sheet.getCell(2, 0)
    const textoCell = sheet.getCell(2, 1)

    res.end(JSON.stringify({
      showCupom: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCupom: false,
      message: ''
    }))
  }

}