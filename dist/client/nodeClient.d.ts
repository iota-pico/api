import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INodeClient } from "../interfaces/INodeClient";
import { IAddNeighborsRequest } from "../models/IAddNeighborsRequest";
import { IAddNeighborsResponse } from "../models/IAddNeighborsResponse";
import { IFindTransactionsRequest } from "../models/IFindTransactionsRequest";
import { IFindTransactionsResponse } from "../models/IFindTransactionsResponse";
import { IGetBalancesRequest } from "../models/IGetBalancesRequest";
import { IGetBalancesResponse } from "../models/IGetBalancesResponse";
import { IGetInclusionStatesRequest } from "../models/IGetInclusionStatesRequest";
import { IGetInclusionStatesResponse } from "../models/IGetInclusionStatesResponse";
import { IGetNeighborsResponse } from "../models/IGetNeighborsResponse";
import { IGetNodeInfoResponse } from "../models/IGetNodeInfoResponse";
import { IGetTipsResponse } from "../models/IGetTipsResponse";
import { IGetTransactionsToApproveRequest } from "../models/IGetTransactionsToApproveRequest";
import { IGetTransactionsToApproveResponse } from "../models/IGetTransactionsToApproveResponse";
import { IGetTrytesRequest } from "../models/IGetTrytesRequest";
import { IGetTrytesResponse } from "../models/IGetTrytesResponse";
import { IRemoveNeighborsRequest } from "../models/IRemoveNeighborsRequest";
import { IRemoveNeighborsResponse } from "../models/IRemoveNeighborsResponse";
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
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    addNeighbors(request: IAddNeighborsRequest): Promise<IAddNeighborsResponse>;
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    removeNeighbors(request: IRemoveNeighborsRequest): Promise<IRemoveNeighborsResponse>;
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    getTips(): Promise<IGetTipsResponse>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    findTransactions(request: IFindTransactionsRequest): Promise<IFindTransactionsResponse>;
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    getTrytes(request: IGetTrytesRequest): Promise<IGetTrytesResponse>;
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    getInclusionStates(request: IGetInclusionStatesRequest): Promise<IGetInclusionStatesResponse>;
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse>;
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    getTransactionsToApprove(request: IGetTransactionsToApproveRequest): Promise<IGetTransactionsToApproveResponse>;
    private sendCommand<T, U>(command, request);
    private createHeaders();
}
