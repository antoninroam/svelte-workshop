import { writable } from 'svelte/store';

interface Account {
	name: string;
}

export const accounts = writable<Account[]>([]);
