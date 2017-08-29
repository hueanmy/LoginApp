class GetProfileByFullnameCondition {
	constructor(fullname) {
		this.fullname = fullname;
	}

	getSQL() {
		return 'select * from profile where fullname like ?';
	}

	getParameter() {
		return [`%${this.fullname}%`];
	}

	getKey() {
		return 'fullname';
	}

	getValue() {
		return this.fullname;
	}

}

module.exports = GetProfileByFullnameCondition;
