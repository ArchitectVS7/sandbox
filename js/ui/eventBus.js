export const eventBus = {
    events: {},
    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    },
    emit(event, data) {
        (this.events[event] || []).forEach(l => l(data));
    }
};
