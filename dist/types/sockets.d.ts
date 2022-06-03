import { PluginStatus } from '.';
export interface ServerToClientEvents {
    pluginStatusChange: (payload: PluginStatusChangedPayload) => void;
}
export interface ClientToServerEvents {
    ping: (payload: ClientToServerPayloads) => void;
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
export declare type ClientToServerPayloads = PluginStatusChangedPayload;
export declare type ServerToClientPayloads = PluginStatusChangedPayload;
