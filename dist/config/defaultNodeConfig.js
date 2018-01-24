"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Default implementation of the configuration for an IOTA node.
 */
class DefaultNodeConfig {
    /**
     * Create an instance of DefaultNodeConfig.
     * @param protocol The protocol to access the node with.
     * @param host The host name or ip of the node.
     * @param port The port of the node.
     */
    constructor(protocol, host, port) {
        if (protocol === undefined || protocol === null || !/http|https/.test(protocol)) {
            throw new coreError_1.CoreError("The protocol must be defined as http or https");
        }
        if (host === undefined || host === null) {
            throw new coreError_1.CoreError("The host must be defined");
        }
        this._protocol = protocol;
        this._host = host;
        this._port = port;
    }
    /**
     * The protocol to access the node with.
     * @return The protocol.
     */
    getProtocol() {
        return this._protocol;
    }
    /**
     * The host of the node.
     * @returns The host.
     */
    getHost() {
        return this._host;
    }
    /**
     * The port of the node.
     * @returns The port.
     */
    getPort() {
        return this._port;
    }
}
exports.DefaultNodeConfig = DefaultNodeConfig;
