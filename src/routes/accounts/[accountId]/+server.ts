import * as db from '$lib/database';
export const DELETE = ({ params }) => {
	console.log(params);
	const { accountId } = params;
	if (accountId) {
		db.deleteAccount(accountId);
		return new Response(null, { status: 204 });
	} else {
		return new Response('Not found', { status: 404 });
	}
};
