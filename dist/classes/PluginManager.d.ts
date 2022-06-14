/// <reference types="node" />
import { PluginSettings, PluginStatus } from '../types/index.js';
import { Input } from '../types/settingsInputs.js';
import EventEmitter from 'events';
declare abstract class PluginTemplate extends EventEmitter {
    static settingsInputs: Input[];
    name: string;
    id: number;
    active: boolean;
    private status;
    abstract setup(options: PluginSettings): void;
    abstract destroy(): void;
    constructor(id: number);
    setStatus(status: PluginStatus): void;
    getStatus(): PluginStatus;
}
export default PluginTemplate;
