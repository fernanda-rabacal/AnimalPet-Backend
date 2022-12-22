const zod = require('zod')

const loginUser = zod.object({
	email: zod
		.string({
      required_error: "Email é obrigatório",
    })
		.email()
		.max(100),

	password: zod
		.string({
      required_error: "Senha é obrigatória",
    })
});

module.exports = loginUser;