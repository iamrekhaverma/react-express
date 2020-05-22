var express = require('express');
var router = express.Router();
var fs = require('fs');
const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var csvWriterStream = require('csv-write-stream')
const url = require('url')

// Initial Header for csv
// const csvWriter = createCsvWriter({
//   path: 'out.csv',
//   header: [
//     {id: 'shipname', title: 'ShipName'},
//     {id: 'class', title: 'Class'},
//     {id: 'commisioned', title: 'Commisioned'},
//     {id: 'builders', title: 'Builders'},
//     {id: 'length(m)', title: 'Length(m)'},
//     {id: 'breadth(m)', title: 'Breadth(m)'},
//     {id: 'draught(m)', title: 'Draught(m)'},
//     {id: 'speed(knots)', title: 'Speed(knots)'},
//     {id: 'complement', title: 'Complement'},
//     {id: 'armaments', title: 'Armaments'},
//     {id: 'sensors', title: 'Sensors'},
//     {id: 'range', title: 'Range'},
//     {id: 'displacement', title: 'Displacement'},
//   ]
// });
var csvWriter = require('csv-write-stream')


router.get('/', function (req, res) {
    res.send('Hello World!')
});

// // Return csv response as json
// router.get('/result', function(req, res, next) {
//   const results = [];
//   fs.createReadStream('out.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     return res.send(results);
//   });
// });
const header = ['shipname','class','commisioned','builders','length(m)','breadth(m)','draught(m)','speed',
  'complement','armaments','sensors','range','displacement'
]

// Write to csv
router.post('/write-to-csv', (req, res) => {
  const body = req.body;
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide data',
      })
  }
  console.log("body",body)
  if (!fs.existsSync('out.csv'))
    writer = csvWriter({ headers: header});
  else
    writer = csvWriter({sendHeaders: false});

  writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));
  writer.write(body);
  writer.end();
});

// Search csv
router.get('/searchCsv', (req, res) => {
    const body = req.body;
    // console.log("body",req)
    let column = req.query.column;
    let search = req.query.text;
    if(!column && !search) {
        return res.status(400).json({
            success: false,
            error: 'You must provide column name and search parameter',
        })
    }
    const result = [];
    // Read CSV row by row and send response
    fs.createReadStream('out.csv')
    .on('error', () => {
        res.send({error: "Error occured"});
    })
    .pipe(csv())
    .on('data', (row) => {
        // use row data
        if(row[column].includes(search)) {
            result.push(row)
        }
    })
    .on('end', () => {
        // handle end of CSV
        res.send(result);
    })
});

module.exports = router;
