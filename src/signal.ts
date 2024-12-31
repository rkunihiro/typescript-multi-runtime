import process from "node:process";

export function waitSignals(signals = ["SIGINT", "SIGTERM"]): Promise<string> {
    return new Promise<string>((resolve) => {
        signals.forEach((signal) => {
            process.on(signal, () => {
                resolve(signal);
            });
        });
    });
}
