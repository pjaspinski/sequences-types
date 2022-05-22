import { PluginSettings, PluginStatus } from './types/index';
import { Input } from './types/settingsInputs';

export abstract class PluginTemplate {
	static settingsInputs: Input[];
	active: boolean = false;
	status: PluginStatus = 'DISABLED';
	abstract setup(options: PluginSettings): void;
	abstract destroy(): void;
}

export * from './types';
