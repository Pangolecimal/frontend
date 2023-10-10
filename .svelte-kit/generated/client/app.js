export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/tasks": [3],
		"/tasks/task_1": [4],
		"/tasks/task_1/circle": [5],
		"/tasks/task_1/rect": [6],
		"/tasks/task_2": [7],
		"/tasks/task_3": [8],
		"/tasks/task_4": [9]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';