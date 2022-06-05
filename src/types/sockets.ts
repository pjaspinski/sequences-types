import { PluginStatus } from '.';

export interface ServerToClientEvents {
	pluginStatusChange: (payload: PluginStatusChangedPayload) => void;
}

export interface ClientToServerEvents {
	ping: (payload: ClientToServerPayloads) => void; // to be removed later
}

export interface InterServerEvents {
	ping: () => void;
}

export interface SocketData {
	message: string;
}

export interface PluginStatusChangedPayload {
	pluginId: number;
	status: PluginStatus;
}

export type ClientToServerPayloads = PluginStatusChangedPayload;

export type ServerToClientPayloads = PluginStatusChangedPayload; // to be changed later
