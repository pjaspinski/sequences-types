import { PluginSettings, PluginStatus } from './types/index.js';
import { Input } from './types/settingsInputs.js';
import EventEmitter from 'events';

export abstract class PluginTemplate extends EventEmitter {
	static settingsInputs: Input[];
	name: string;
	id: number;
	active: boolean = false;
	private status: PluginStatus;
	abstract setup(options: PluginSettings): void;
	abstract destroy(): void;
	constructor(id: number) {
		super();
		this.status = PluginStatus.DISABLED;
		this.id = id;
	}

	setStatus(status: PluginStatus) {
		this.emit('pluginStatusChange', { pluginId: this.id, status: status });
		this.status = status;
	}

	getStatus() {
		return this.status;
	}
}

export * from './types/index.js';
