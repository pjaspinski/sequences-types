import { PluginSettings, PluginStatus } from './types/index.js';
import { Input } from './types/settingsInputs.js';

export abstract class PluginTemplate {
	static settingsInputs: Input[];
	name: string;
	id: number;
	active: boolean = false;
	status: PluginStatus;
	abstract setup(options: PluginSettings): void;
	abstract destroy(): void;
	constructor(id: number) {
		this.status = PluginStatus.DISABLED;
		this.id = id;
	}
}

export * from './types/index.js';
