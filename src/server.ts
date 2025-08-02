import { randomUUID } from "node:crypto";

import { fastify, type FastifyBaseLogger } from "fastify";

export function createServer(logger?: FastifyBaseLogger) {
    // Create server
    const server = fastify({
        loggerInstance: logger,
        genReqId() {
            return randomUUID();
        },
    });

    server.setErrorHandler((error, request, reply) => {
        request.log.error(error);
        reply.status(500);
        return { status: 500, message: "Internal Server Error" };
    });
    server.setNotFoundHandler((request, reply) => {
        request.log.error("Not Found");
        reply.status(404);
        return { status: 404, message: "Not Found" };
    });

    // Add request handler
    server.get("/", (request, _reply) => {
        const { method, url, query } = request;
        return { method, url, query };
    });

    return server;
}
