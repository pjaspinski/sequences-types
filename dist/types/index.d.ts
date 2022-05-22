export declare type PluginSettings = {
    [index: string]: string;
};
export declare type SetupFunction = (options: PluginSettings) => void;
export declare type DestroyFunction = () => void;
export declare type PluginStatus = 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';
export * from './settingsInputs';
