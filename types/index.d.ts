declare type IdKey = string | string[];
declare class EventBus {
    events: Map<any, any>;
    emit(id: IdKey, params?: any): void;
    on(id: IdKey, callback: () => void): void;
    once(id: IdKey, callback: () => void | Promise<void>): void;
    off(id: IdKey, callback?: () => void): void;
}
declare const eventBus: EventBus;
export default eventBus;
