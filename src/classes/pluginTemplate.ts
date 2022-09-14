import { Action, ActiveAction, PluginModel, PluginSettings, PluginStatus } from '../types/index.js';
import { Input } from '../types/settingsInputs.js';
import EventEmitter from 'events';

export abstract class PluginTemplate extends EventEmitter {
	settingsInputs: Input[];
	lastSettings: PluginSettings;
	name: string;
	id: number;
	actions: Action[];
	private status: PluginStatus;
	abstract setup(options: PluginSettings): void;
	abstract destroy(): void;
	abstract handleAction(action: ActiveAction): void;
	constructor() {
		super();
		this.status = 'REMOVED';
	}

	setStatus(status: PluginStatus) {
		this.emit('pluginStatusChange', {
			pluginId: this.id,
			status: status,
			lastSettings: this.lastSettings,
		});
		this.status = status;
	}

	getStatus() {
		return this.status;
	}

	prepareModel(): PluginModel {
		return {
			id: this.id,
			name: this.name,
			settingsInputs: this.settingsInputs,
			status: this.status,
			lastSettings: this.lastSettings,
		};
	}

	getActions(): Action[] {
		return this.actions;
	}
}
