import { PluginSettings, PluginStatus } from './types/index';
import { Input } from './types/settingsInputs';
export declare abstract class PluginTemplate {
    static settingsInputs: Input[];
    active: boolean;
    status: PluginStatus;
    abstract setup(options: PluginSettings): void;
    abstract destroy(): void;
}
export * from './types';
