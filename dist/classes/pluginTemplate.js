import { PluginStatus } from '../types/index.js';
import EventEmitter from 'events';
export class PluginTemplate extends EventEmitter {
    constructor() {
        super();
        this.status = PluginStatus.DISABLED;
    }
    setStatus(status) {
        this.emit('pluginStatusChange', { pluginId: this.id, status: status });
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    prepareModel() {
        return {
            id: this.id,
            name: this.name,
            settingsInputs: this.settingsInputs,
            status: this.status,
        };
    }
    getActions() {
        return this.actions;
    }
}
