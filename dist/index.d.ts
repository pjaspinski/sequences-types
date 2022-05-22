import { DestroyFunction, PluginStatus, SetupFunction } from './types/index';
import { Input } from './types/settingsInputs';
export declare abstract class PluginTemplate {
    static settingsInputs: Input[];
    active: boolean;
    status: PluginStatus;
    abstract setup(): SetupFunction;
    abstract destroy(): DestroyFunction;
}
