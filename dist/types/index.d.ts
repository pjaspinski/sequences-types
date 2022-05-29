export declare type PluginSettings = {
    [index: string]: string;
};
export declare enum PluginStatus {
    DISABLED = "DISABLED",
    RUNNING = "RUNNING",
    ERROR = "ERROR",
    LOADING = "LOADING"
}
export * from './settingsInputs.js';
export * from './sockets.js';
