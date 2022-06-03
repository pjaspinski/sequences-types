import { PluginStatus } from './types/index.js';
import EventEmitter from 'events';
export class PluginTemplate extends EventEmitter {
    static settingsInputs;
    name;
    id;
    active = false;
    status;
    constructor(id) {
        super();
        this.status = PluginStatus.DISABLED;
        this.id = id;
    }
    setStatus(status) {
        this.emit('pluginStatusChange', { pluginId: this.id, status: status });
        this.status = status;
    }
}
export * from './types/index.js';
