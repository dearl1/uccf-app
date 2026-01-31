import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000
const app = express();

import { cuService } from './src/services/cuService.js';

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

let cuData = null;


(async () => {
    let jsonData = await cuService();
    cuData = jsonData.data;
    
})();

app.get('/',(req, res)=>{
    res.render('index');
})

app.post('/fetch-CU', (req,res) => {
    if (req.body.data === "") {
        res.json({data: cuData})
    }
})


app.listen(PORT), ()=>{
    console.log('listening on port ?');
};