"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginTemplate = void 0;
const events_1 = __importDefault(require("events"));
class PluginTemplate extends events_1.default {
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
exports.PluginTemplate = PluginTemplate;
