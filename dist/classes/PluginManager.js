import { PluginStatus } from '../types/index.js';
import EventEmitter from 'events';
class PluginTemplate extends EventEmitter {
	static settingsInputs;
	name;
	id;
	active = false;
	status;
	constructor(id) {
		super();
		this.status = 'DISABLED';
		this.id = id;
	}
	setStatus(status) {
		this.emit('pluginStatusChange', { pluginId: this.id, status: status });
		this.status = status;
	}
	getStatus() {
		return this.status;
	}
}
export default PluginTemplate;
