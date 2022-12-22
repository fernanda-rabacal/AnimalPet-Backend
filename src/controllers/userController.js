const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const schema = require('../validation/userSchema')

const login = async (req, res) => {
	const { email, password } = req.body;

	//await schema.loginUser.parse(req.body)

	try {
    const user = await knex('users').where({ email }).first();

		if (!user) {
			return res.status(404).json('Usuario não encontrado');
		}

		const validatePassword = await password === user.password;

		if (!validatePassword) {
			return res.status(404).json('Email e senha não conferem');
		}

		return res.status(200).json(user);
	} catch (error) {
		return res.status(400).json(error.message);
	}
}

module.exports = { login };