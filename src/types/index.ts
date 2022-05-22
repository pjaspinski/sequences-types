export type PluginSettings = { [index: string]: string };
export type SetupFunction = (options: PluginSettings) => void;
export type DestroyFunction = () => void;
export type PluginStatus = 'DISABLED' | 'RUNNING' | 'ERROR' | 'LOADING';

export * from './settingsInputs';
