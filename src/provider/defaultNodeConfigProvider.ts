import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { INodeConfig } from "../interfaces/INodeConfig";
import { INodeConfigProvider } from "../interfaces/INodeConfigProvider";

/**
 * Default implementation of a provider which will supply a INodeConfig.
 * @interface
 */
export class DefaultNodeConfigProvider implements INodeConfigProvider {
    private readonly _nodeConfig: INodeConfig;

    /**
     * Create an instance of DefaultNodeConfigProvider.
     * @param nodeConfig The node config to provide.
     */
    constructor(nodeConfig: INodeConfig) {
        if (nodeConfig === undefined || nodeConfig === null) {
            throw new CoreError("The node config must be defined");
        }
        this._nodeConfig = nodeConfig;
    }

    /**
     * Get a node configuration asynchronously.
     * @returns A node configuration.
     */
    public async get(): Promise<INodeConfig> {
        return Promise.resolve(this._nodeConfig);
    }
}
