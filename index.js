const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var AWS = require("aws-sdk");

const app = express();
const port = 3000;
app.use(cors());

var dynamodb = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1',
    apiVersion: '2012-08-10'
});

const s3 = new AWS.S3({
    region: 'us-east-1',
    Bucket: 'thicc-boi-thiccbucket-1lqm0m2iu7gji'
});

let params = {
    Bucket: "thicc-boi-thiccbucket-1lqm0m2iu7gji",
};

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/get', async (req, res) => {
    res.send('ay')
});

app.get('/put', async (req, res) => {
    res.send('yo')
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))