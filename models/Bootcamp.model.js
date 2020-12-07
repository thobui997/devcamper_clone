const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'PLease add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name can not more than 50 character'],
	},
	slug: String,
	description: {
		type: String,
		required: [true, 'PLease add a description'],
		maxlength: [500, 'Description can not more than 500 character'],
	},
	website: {
		type: String,
		match: [
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
			'Pleas use a valid url with HTTP or HTTPS',
		],
	},
	phone: {
		type: Number,
		match: [
			/(84|0[3|5|7|8|9])+([0-9]{8})\b/,
			'Please add a valide phone number',
		],
		maxlength: [10, 'Phone number can not more than 10'],
	},
	email: {
		type: String,
		match: [
			/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
			'Please use a valid email',
		],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		type: {
			type: String,
			enum: ['Point'],
			// required: true,
		},
		coordinates: {
			type: [Number],
			// required: true,
			index: '2dsphere',
		},
		formattedAddress: String,
		street: String,
		city: String,
		state: String,
		zipcode: String,
		country: String,
	},
	careers: {
		type: [String],
		required: true,
		enum: [
			'Web Development',
			'Mobile Development',
			'UI/UX',
			'Business',
			'Other',
		],
	},
	averageRating: {
		type: Number,
		min: [1, 'Rating must be at least 1'],
		max: [10, 'Rating must can not b more than 10'],
	},
	averageCost: Number,
	photo: {
		type: String,
		default: 'no-photo.jpg',
	},
	housing: {
		type: Boolean,
		default: false,
	},
	jobAssitance: {
		type: Boolean,
		default: false,
	},
	acceptGi: {
		type: Boolean,
		default: false,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
