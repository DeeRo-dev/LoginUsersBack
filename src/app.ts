import router from './routes/index.ts';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', router);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});


