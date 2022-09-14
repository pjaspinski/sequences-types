import { Input } from './settingsInputs';
export interface PluginModel {
    id: number;
    name: string;
    settingsInputs: Input[];
    status: PluginStatus;
    lastSettings: PluginSettings;
}
export declare type PluginSettings = {
    [index: string]: string;
};
export declare type PluginStatus = 'REMOVED' | 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';
