import { INodeConfig } from "./INodeConfig";
/**
 * Represents a provider which will supply a INodeConfig.
 * @interface
 */
export interface INodeConfigProvider {
    /**
     * Get a node configuration asynchronously.
     * @returns A node configuration.
     */
    get(): Promise<INodeConfig>;
}
