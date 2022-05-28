import { PluginSettings, PluginStatus } from './types/index.js';
import { Input } from './types/settingsInputs.js';
export declare abstract class PluginTemplate {
    static settingsInputs: Input[];
    name: string;
    id: number;
    active: boolean;
    status: PluginStatus;
    abstract setup(options: PluginSettings): void;
    abstract destroy(): void;
    constructor(id: number);
}
export * from './types/index.js';
