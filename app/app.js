'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/allRoutes';
import session from 'express-session';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({secret: 'TopSecret'}));

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, ()=>{
    console.log("started");
})

app.use(function(req, res) {
    res.status(404);
});