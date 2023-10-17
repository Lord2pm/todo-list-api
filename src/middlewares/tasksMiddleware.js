const validateFieldTitle = (req, res, next) => {
	const { body } = req;

	if (body.title == undefined) {
		res.status = 400;
		res.json({ message: "The field 'title' is required" });
	}
	if (!body.title) {
		res.status = 400;
		res.json({ message: "The field 'title' can not be empty" });
	}
	next();
};

const validateFieldStatus = (req, res, next) => {
	const { body } = req;

	if (body.stutus == undefined) {
		res.status = 400;
		res.json({ message: "The field 'status' is required" });
	}
	if (!body.status) {
		res.status = 400;
		res.json({ message: "The field 'status' can not be empty" });
	}
	next();
};

module.exports = {
	validateFieldTitle,
	validateFieldStatus,
};
