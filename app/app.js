'use strict';
import express from 'express';
import bodyParser from 'body-parser';
//import routes from './routes/allRoutes';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// routes(app);

app.listen(port, ()=>{
    console.log("started");
})

app.use(function(req, res) {
    res.status(404);
});