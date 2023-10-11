import * as db from '$lib/database';
import { redirect } from '@sveltejs/kit';
export const load = ({ params }) => {
	const account = db.getAccount(params.accountId);
	if (!account) {
		throw redirect(308, '/accounts');
	}
};
