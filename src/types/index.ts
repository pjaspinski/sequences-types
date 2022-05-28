export type PluginSettings = { [index: string]: string };
export enum PluginStatus {
	DISABLED = 'DISABLED',
	RUNNING = 'RUNNING',
	ERROR = 'ERROR',
	LOADING = 'LOADING',
}

export * from './settingsInputs.js';
