import { writable } from 'svelte/store';
import type { Account } from './types';

export const accounts = writable<Account[]>([{ name: 'one' }, { name: 'two' }]);
