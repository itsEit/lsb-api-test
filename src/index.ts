import express, { Application } from 'express';
import characterRoutes from './routes/characterRoutes';

const app: Application = express();
const port: number = parseInt(String(process.env.API_PORT));

app.use(characterRoutes);

app.listen(port, () => {
  console.log(`Connected on Port: ${port}`);
});
