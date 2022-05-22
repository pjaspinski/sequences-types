import { Input } from './settingsInputs';

export interface PluginDefinition {
	name: string;
	settingsFields: Input[];
}

export interface Plugin extends PluginDefinition {
	id: number;
}

export * from './settingsInputs';
