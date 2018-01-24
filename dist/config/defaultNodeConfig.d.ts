import { INodeConfig } from "../interfaces/INodeConfig";
import { NodeProtocol } from "../interfaces/nodeProtocol";
/**
 * Default implementation of the configuration for an IOTA node.
 */
export declare class DefaultNodeConfig implements INodeConfig {
    private readonly _protocol;
    private readonly _host;
    private readonly _port;
    /**
     * Create an instance of DefaultNodeConfig.
     * @param protocol The protocol to access the node with.
     * @param host The host name or ip of the node.
     * @param port The port of the node.
     */
    constructor(protocol: NodeProtocol, host: string, port: number);
    /**
     * The protocol to access the node with.
     * @return The protocol.
     */
    getProtocol(): NodeProtocol;
    /**
     * The host of the node.
     * @returns The host.
     */
    getHost(): string;
    /**
     * The port of the node.
     * @returns The port.
     */
    getPort(): number;
}
