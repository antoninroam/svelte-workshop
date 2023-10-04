import * as db from '$lib/database';

export const load = () => {
	const accounts = db.getAllAccounts();
	return {
		accounts
	};
};

export const actions = {};
