/// <reference types="node" />
import { PluginSettings, PluginStatus } from './types/index.js';
import { Input } from './types/settingsInputs.js';
import EventEmitter from 'events';
export declare abstract class PluginTemplate extends EventEmitter {
    static settingsInputs: Input[];
    name: string;
    id: number;
    active: boolean;
    status: PluginStatus;
    abstract setup(options: PluginSettings): void;
    abstract destroy(): void;
    constructor(id: number);
    setStatus(status: PluginStatus): void;
}
export * from './types/index.js';
