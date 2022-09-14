import { Input } from './settingsInputs';
import { Worker } from 'node:worker_threads';

export interface Sequence {
	id: number;
	name: string;
	pluginId: number;
	actions: ActiveAction[];
	playoutStatus: PlayoutStatus;
}

export interface PlayoutWorker {
	worker: Worker;
	status: PlayoutStatus;
}

export interface PlayoutStatus {
	state: 'RUNNING' | 'PAUSED' | 'STOPPED';
	current?: number;
	total: number;
}

export interface ActiveAction extends Omit<Action, 'settingsInputs' | 'id'> {
	id: string;
	settings: ActionSettings;
	templateId: number;
	delay: number;
}

export interface ActionSettings {
	[key: string]: string | number | boolean;
}

export interface Action {
	id: number;
	name: string;
	settingsInputs: Input[];
}

export interface ActionsModel {
	name: string;
	actions: Action[];
}
