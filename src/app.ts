import "reflect-metadata";
import express, { Application, Request, Response } from 'express';
import { createConnection } from 'typeorm';

const app: Application = express();

app.get('/', (req: Request, res: Response): Response => { 
    return res.send('Hello');
})

app.listen(3000, async () => {
    await createConnection();
    console.log('Server running...');
});