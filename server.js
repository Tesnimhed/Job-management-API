import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express();
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose'; 
import {errorHandlerMiddleware} from './middlewares/errorHandlerMiddleware.js';
import {body , validationResult} from 'express-validator';

app.use(express.json()); //middleware => req.body
 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post('/api/v1/test', (req, res) => {
// const { name } = req.body;
// res.json({ msg: `hello ${name}` });
// });

// import { body, validationResult } from 'express-validator';
// app.post(
// '/api/v1/test',
// [body('name').notEmpty().withMessage('name is required')],
// (req, res) => {
// const errors = validationResult(req);
// if (!errors.isEmpty()) {
// const errorMessages = errors.array().map((error) => error.msg);
// return res.status(400).json({ errors: errorMessages });
// }
// next();
// },
// (req, res) => {
// const { name } = req.body;
// res.json({ msg: `hello ${name}` });
// }
// );

app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => { 
  res.status(404).json({ msg: 'not found' }); 
}); 

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
try { 
  await mongoose.connect(process.env.MONGO_URL); 
  console.log('connected to mongoDB');
  app.listen(port, () => { 
    console.log(`server running on PORT ${port}....`); 
  }); 
} catch (error) { 
  console.log(error); 
  process.exit(1); 
} 