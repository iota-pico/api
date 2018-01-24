import { NodeProtocol } from "./nodeProtocol";

/**
 * Represents the configuration for an IOTA node.
 * @interface
 */
export interface INodeConfig {
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
