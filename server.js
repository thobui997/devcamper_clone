const express = require('express');
const dotEnv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotEnv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} envinoment on port ${PORT}`,
	);
});
