import { pino } from "pino";

export const logger = pino({
    formatters: {
        level(level) {
            return { level };
        },
        bindings() {
            return {};
        },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    messageKey: "message",
    errorKey: "error",
});
