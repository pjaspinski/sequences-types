import { Input } from './settingsInputs';

export interface PluginModel {
	id: number;
	name: string;
	settingsInputs: Input[];
	status: PluginStatus;
}

export type PluginSettings = { [index: string]: string };

export enum PluginStatus {
	DISABLED = 'DISABLED',
	RUNNING = 'RUNNING',
	ERROR = 'ERROR',
	LOADING = 'LOADING',
}
