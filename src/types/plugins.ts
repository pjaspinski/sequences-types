import { Input } from './settingsInputs';

export interface PluginModel {
	id: number;
	name: string;
	settingsInputs: Input[];
	status: PluginStatus;
	lastSettings: PluginSettings;
}

export type PluginSettings = { [index: string]: string };

export type PluginStatus = 'REMOVED' | 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';
