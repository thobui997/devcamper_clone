const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
require('colors');

// Load env vars
dotEnv.config({ path: './config/config.env' });

// Load router file
const bootcampRoute = require('./routes/bootcamp.route');

// Connect to Database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcampRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} envinoment on port ${PORT}`
			.yellow.bold,
	);
});

// Handle unhandled promise rejection
process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}`.red);
	// close server and exit process
	server.close(() => process.exit(1));
});
