import 'reflect-metadata';
import express, { json } from 'express';
import cors from "cors";
import { config } from './ormconfig';
import { routes } from './src/routes';

const app = express();
app.use(json());
app.use(cors());
app.use(routes);

config.initialize().then(async () => {
  console.log(`Connected to database ${config.options.database}`);
  app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
  });
});
