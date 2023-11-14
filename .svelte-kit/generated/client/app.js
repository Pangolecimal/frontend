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
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/tasks": [4],
		"/tasks/lights-out": [5],
		"/tasks/task-1": [6],
		"/tasks/task-1/circle": [7],
		"/tasks/task-1/rect": [8],
		"/tasks/task-2": [9],
		"/tasks/task-3": [10],
		"/tasks/task-4": [11],
		"/tasks/task-5": [12],
		"/tasks/task-6": [13],
		"/tasks/task-7": [14],
		"/tasks/task-8": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';