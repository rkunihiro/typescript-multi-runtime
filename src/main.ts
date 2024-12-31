import process from "node:process";

import { logger } from "./logger.ts";
import { createServer } from "./server.ts";
import { waitSignals } from "./signal.ts";

try {
    const { node, deno, bun } = process.versions;
    logger.info({ versions: { node, deno, bun } }, "Hello,World!");

    // Create server
    const server = createServer(logger);

    // Start server
    await server.listen({ host: "0.0.0.0", port: 3000 });

    // Wait for signal
    const signal = await waitSignals();
    logger.info({ signal }, "Shutting down...");

    // Close server
    await server.close();
    logger.info("Server closed.");

    process.exit(0);
} catch (error) {
    logger.error(error);
    process.exit(1);
}
