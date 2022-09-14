import EventEmitter from 'events';
export class PluginTemplate extends EventEmitter {
    constructor() {
        super();
        this.status = 'REMOVED';
    }
    setStatus(status) {
        this.emit('pluginStatusChange', {
            pluginId: this.id,
            status: status,
            lastSettings: this.lastSettings,
        });
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
            lastSettings: this.lastSettings,
        };
    }
    getActions() {
        return this.actions;
    }
}
