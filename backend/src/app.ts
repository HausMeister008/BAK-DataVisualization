import express, { query } from "express";
import { Pool } from "pg";
import fs from "fs"
var parse = require('csv-parser')
// https://node-postgres.com/
const app = express();

const pool = new Pool({
  host: 'localhost',
  user: 'leongrass',
  database: 'summaries',
  password: 'w1rch4tt3npr1v4t',
  port: 5432,
})

app.use(express.json())  // Hiermit kann Express JSON-Daten einlesen

interface datares {
    name: string,
    data: Array<Object>,
    keys: Array<string>,
    date: string
}

app.get('/api/data', async (req, res) => {
    var result_data:Array<Object> = []
    const files =  fs.readdirSync('./data')
    files.forEach(async(file, index) => {
        var result:datares = {name: '', data:[], keys:[], date:''}
        await fs.createReadStream(`./data/${file}`)
        .pipe(parse())
        .on('data', async(data:Object) => {
            result.data.push(data)
        })
        .on('end', async () => {
            result.name = file.replace('.csv', '')
            result.keys = Object.keys(result.data[0])
            result_data.push(result)
            result.date = result.keys.sort().pop()
            if (result_data.length == files.length){
                console.log(result_data)
                res.send(result_data)
            }
        })  
    })
})

const port = 8080
const server = app.listen(port, () => {
  console.log('opened server on port', port);
})