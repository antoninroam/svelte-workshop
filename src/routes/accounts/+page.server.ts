import * as db from '$lib/database';
import { error } from '@sveltejs/kit';

export const load = () => {
	const accounts = db.getAllAccounts();
	// throw error(404, 'Not found');
	return {
		accounts
	};
};

export const actions = {
	create: async ({ request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const formData = await request.formData();
		const accountName = formData.get('account-name');

		if (typeof accountName === 'string') {
			db.createAccount({ name: accountName });
		}
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const accountId = formData.get('account-id');

		if (typeof accountId === 'string') {
			db.deleteAccount(accountId);
		}
	}
};
