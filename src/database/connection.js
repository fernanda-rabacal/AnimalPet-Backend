const knex = require('knex')(
	{
		client: 'mysql2',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			database: process.env.DB_DATABASE,
			password: process.env.DB_PASSWORD,
		}
	})

module.exports = knex;