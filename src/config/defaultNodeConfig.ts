import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { INodeConfig } from "../interfaces/INodeConfig";
import { NodeProtocol } from "../interfaces/nodeProtocol";

/**
 * Default implementation of the configuration for an IOTA node.
 */
export class DefaultNodeConfig implements INodeConfig {
    private readonly _protocol: NodeProtocol;
    private readonly _host: string;
    private readonly _port: number;

    /**
     * Create an instance of DefaultNodeConfig.
     * @param protocol The protocol to access the node with.
     * @param host The host name or ip of the node.
     * @param port The port of the node.
     */
    constructor(protocol: NodeProtocol, host: string, port: number) {
        if (protocol === undefined || protocol === null || !/http|https/.test(protocol)) {
            throw new CoreError("The protocol must be defined as http or https");
        }
        if (host === undefined || host === null) {
            throw new CoreError("The host must be defined");
        }
        this._protocol = protocol;
        this._host = host;
        this._port = port;
    }

    /**
     * The protocol to access the node with.
     * @return The protocol.
     */
    public getProtocol(): NodeProtocol {
        return this._protocol;
    }

    /**
     * The host of the node.
     * @returns The host.
     */
    public getHost(): string {
        return this._host;
    }

    /**
     * The port of the node.
     * @returns The port.
     */
    public getPort(): number {
        return this._port;
    }
}
