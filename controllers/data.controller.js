const db = require('../models');
const DataTest = db.dataTests;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
	const login = req.query.login;
	var condition = login ? { login: { [Op.like]: `%${login}%` } } : null;

	Login.findAll({ where: condition })
		.then(data => {
			res.send({
				data: data
			});
		})
		.catch(err => {
			res.status(500).send({
				error: err.message || "erreur d'affichage "
			});
		});
};
