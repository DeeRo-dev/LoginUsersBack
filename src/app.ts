import router from './routes/index.ts';
import dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './database/db.ts';
dotenv.config();



const app = express();

const port = process.env.PORT || 3000;

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Authentication db fullshed')
        app.get('/', router);
        app.get('/login', router);
        console.log('holis')
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });

    } catch (error) {
        console.log(error)
    }
}


main()