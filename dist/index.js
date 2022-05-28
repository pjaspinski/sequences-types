import { PluginStatus } from './types/index.js';
export class PluginTemplate {
    static settingsInputs;
    name;
    id;
    active = false;
    status;
    constructor(id) {
        this.status = PluginStatus.DISABLED;
        this.id = id;
    }
}
export * from './types/index.js';
