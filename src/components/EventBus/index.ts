import { EEventBusActions, TListener } from "./models/eventBusTypes";


export class EventBus {
    listeners: TListener;

    constructor() {
        this.listeners = {} as TListener;
    }

    on(action: EEventBusActions, callback: Function) {
        if (!this.listeners[action]) {
            this.listeners[action] = [];
        }

        this.listeners[action].push(callback);
    }

    off(action: EEventBusActions, callback: Function) {
        if (!this.listeners[action]) {
            throw new Error(`Нет события: ${action}`);
        }

        this.listeners[action] = this.listeners[action].filter(
            listener => listener !== callback
        );
    }

    emit(action: EEventBusActions, ...args: any) {
        if (!this.listeners[action]) {
            throw new Error(`Нет события: ${action}`);
        }

        this.listeners[action].forEach(listener => {
            listener(...args);
        });
    }
}
