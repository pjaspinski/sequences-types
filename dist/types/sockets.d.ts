import { PlayoutStatus, PluginSettings, PluginStatus, Sequence } from '.';
export interface ServerToClientEvents {
    pluginStatusChange: (payload: PluginStatusChangedPayload) => void;
    sequenceStatusChange: (payload: SequenceStatusChangedPayload) => void;
    sequenceCreated: (payload: Sequence) => void;
    sequenceUpdated: (payload: Sequence) => void;
    sequenceDeleted: (payload: SequenceDeletedPayload) => void;
    sequences: (payload: Sequence[]) => void;
}
export interface ClientToServerEvents {
    playPause: (sequenceId: string) => void;
    stop: (sequenceId: string) => void;
    restart: (sequenceId: string) => void;
    getSequences: () => void;
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
    lastSettings: PluginSettings;
}
export interface SequenceStatusChangedPayload {
    id: string;
    status: PlayoutStatus;
}
export interface SequenceDeletedPayload {
    id: string;
}
export declare type ClientToServerPayloads = PluginStatusChangedPayload;
export declare type ServerToClientPayloads = PluginStatusChangedPayload | SequenceStatusChangedPayload | SequenceDeletedPayload;
