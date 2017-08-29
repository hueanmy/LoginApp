class GetProfileByUsernameCondition {

	constructor(username) {
		this.username = username;
	}

	getSQL() {
		return 'select * from profile where username like ?'
	}

	getParameter() {
		return [`%${this.username}%`];
	}

	getKey() {
		return 'username';
	}

	getValue() {
		return this.username;
	}
}

module.exports = GetProfileByUsernameCondition;