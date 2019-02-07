'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/allRoutes';

const app = express();

//CORS
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

routes(app);
app.get('*', function(req, res){
    res.send('endpoint not found', 404);
});


app.listen(port, ()=>{
    console.log("started");
})

app.use(function(req, res) {
    res.status(404);
});