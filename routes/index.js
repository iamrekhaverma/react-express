var express = require('express');
var router = express.Router();
var fs = require('fs');
const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Initial Header for csv
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'shipname', title: 'ShipName'},
    {id: 'class', title: 'Class'},
    {id: 'commisioned', title: 'Commisioned'},
    {id: 'builders', title: 'Builders'},
    {id: 'length(m)', title: 'Length(m)'},
    {id: 'breadth(m)', title: 'Breadth(m)'},
    {id: 'draught(m)', title: 'Draught(m)'},
    {id: 'speed(knots)', title: 'Speed(knots)'},
    {id: 'complement', title: 'Complement'},
    {id: 'armaments', title: 'Armaments'},
    {id: 'sensors', title: 'Sensors'},
    {id: 'range', title: 'Range'},
    {id: 'displacement', title: 'Displacement'},
  ]
});


router.get('/', function (req, res) {
    res.send('Hello World!')
});

// Return csv response
router.get('/result', function(req, res, next) {
  const results = [];
  fs.createReadStream('out.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    return res.send(results);
  });
});

// Write to csv
router.post('/submit-form-data', (req, res) => {
  const body = req.body;
  console.log("body",body)
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide data',
      })
  }
  csvWriter
  .writeRecords([body])
  .then(()=> 
    res.send("The CSV file was written successfully'")
  );
});

// Search csv
router.get('/searchCsv', (req, res) => {
    const body = req.body;
    console.log("body",body)
    let column = req.query.column;
    let search = req.query.text;
    if(!column && !search) {
        return res.status(400).json({
            success: false,
            error: 'You must provide column name and search parameter',
        })
    }
    // Read CSV row by row and send response
    fs.createReadStream('out.csv')
    .on('error', () => {
        res.send({error: "Error occured"});
    })
    .pipe(csv())
    .on('data', (row) => {
        // use row data
        console.log(row,"row");
        if(row[column] === search) {
            res.send(row);
        }
    })
    .on('end', () => {
        // handle end of CSV
        res.send("no result found");
    })
});

module.exports = router;
