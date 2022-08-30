import { Input } from './settingsInputs';

export interface PluginModel {
	id: number;
	name: string;
	settingsInputs: Input[];
	status: PluginStatus;
}

export type PluginSettings = { [index: string]: string };

export type PluginStatus = 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';
