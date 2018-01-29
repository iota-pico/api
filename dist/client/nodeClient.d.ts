import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INodeClient } from "../interfaces/INodeClient";
import { IGetBalancesRequest } from "../models/IGetBalancesRequest";
import { IGetBalancesResponse } from "../models/IGetBalancesResponse";
import { IGetNeighborsResponse } from "../models/IGetNeighborsResponse";
import { IGetNodeInfoResponse } from "../models/IGetNodeInfoResponse";
/**
 * Default implementation of a node client.
 * @interface
 */
export declare class NodeClient implements INodeClient {
    private readonly _networkClient;
    private readonly _apiVersion;
    private readonly _additionalHeaders?;
    /**
     * Create an instance of NodeClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     */
    constructor(networkClient: INetworkClient, apiVersion: string, additionalHeaders?: {
        [header: string]: string;
    });
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    getNodeInfo(): Promise<IGetNodeInfoResponse>;
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    getNeighbors(): Promise<IGetNeighborsResponse>;
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse>;
    private sendCommand<T, U>(command, request);
    private createHeaders();
}
