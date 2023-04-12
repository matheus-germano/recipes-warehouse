import express from 'express';
import { createConnection } from 'typeorm';
import { config } from './ormconfig';

const app = express();

(async () => {
	const connection = await createConnection(config);
	console.log(`Connected to database ${connection.options.database}`);
})();

app.listen(3000, () => {
	console.log('🚀 Server running on http://localhost:3000');
});
