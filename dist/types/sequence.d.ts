import { Input } from './settingsInputs';
export interface Sequence {
    id: number;
    name: string;
    pluginId: number;
    actions: ActiveAction[];
}
export interface ActiveAction extends Omit<Action, 'settingsInputs'> {
    settings: ActionSettings;
    templateId: number;
    delay: number;
}
export interface ActionSettings {
    [key: string]: string | number | boolean;
}
export interface Action {
    id: number;
    name: string;
    settingsInputs: Input[];
}
export interface ActionsModel {
    name: string;
    actions: Action[];
}
