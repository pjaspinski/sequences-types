import { Input } from './settingsInputs';
export interface Sequence {
    id: number;
    name: string;
    pluginId: number;
    actions: Action[];
}
export interface Action {
    name: string;
    settingsInputs: Input[];
}
export interface ActionsModel {
    name: string;
    actions: Action[];
}
