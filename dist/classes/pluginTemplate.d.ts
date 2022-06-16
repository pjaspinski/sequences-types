/// <reference types="node" />
import { Action, ActiveAction, PluginModel, PluginSettings, PluginStatus } from '../types/index.js';
import { Input } from '../types/settingsInputs.js';
import EventEmitter from 'events';
export declare abstract class PluginTemplate extends EventEmitter {
    settingsInputs: Input[];
    name: string;
    id: number;
    actions: Action[];
    private status;
    abstract setup(options: PluginSettings): void;
    abstract destroy(): void;
    abstract handleAction(action: ActiveAction): void;
    constructor();
    setStatus(status: PluginStatus): void;
    getStatus(): PluginStatus;
    prepareModel(): PluginModel;
    getActions(): Action[];
}
