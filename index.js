const express = require ('express');
const app = express();
app.use(express.static('public/'));


app.listen(8080), function name() {
    console.log('Server listening at 8080')  
};