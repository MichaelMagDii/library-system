const express = require('express');

const app = express();

app.use(express.json());    // to add json object on post requests 
app.use(express.urlencoded({ extended: true} ));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})
const prefixRouter = express.Router();

app.use(prefixRouter);

try {
    const port = normalizePort(process.env.PORT || '3055');
    app.listen(port);
    console.log('App Has Started!!! ON PORT', port);
} catch (error) {
    console.log('App Has Crashed', error);
}



function normalizePort(val) {
    const iport = parseInt(val, 10);
  
    if (isNaN(iport)) {
      return val;
    }
    if (iport >= 0) {
      return iport;
    }
    return false;
}