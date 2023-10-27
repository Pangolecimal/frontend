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
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/tasks": [4],
		"/tasks/task_1": [5],
		"/tasks/task_1/circle": [6],
		"/tasks/task_1/rect": [7],
		"/tasks/task_2": [8],
		"/tasks/task_3": [9],
		"/tasks/task_4": [10],
		"/tasks/task_5": [11],
		"/tasks/task_6": [12],
		"/tasks/task_7": [13],
		"/tasks/task_8": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';