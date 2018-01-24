import { INodeConfig } from "../interfaces/INodeConfig";
import { INodeConfigProvider } from "../interfaces/INodeConfigProvider";
/**
 * Default implementation of a provider which will supply a INodeConfig.
 * @interface
 */
export declare class DefaultNodeConfigProvider implements INodeConfigProvider {
    private readonly _nodeConfig;
    /**
     * Create an instance of DefaultNodeConfigProvider.
     * @param nodeConfig The node config to provide.
     */
    constructor(nodeConfig: INodeConfig);
    /**
     * Get a node configuration asynchronously.
     * @returns A node configuration.
     */
    get(): Promise<INodeConfig>;
}
