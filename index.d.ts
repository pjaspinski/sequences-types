import { Input } from './settingsInputs';

export interface PluginDefinition {
	name: string;
	settingsFields: Input[];
	setup: SetupFunction;
	destroy: DestroyFunction;
}

export interface Plugin extends PluginDefinition {
	id: number;
	status: PluginStatus;
	active: boolean;
}

export type PluginSettings = { [index: string]: string };
export type SetupFunction = (options: PluginSettings) => void;
export type DestroyFunction = () => void;
export type PluginStatus = 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';

export * from './settingsInputs';
