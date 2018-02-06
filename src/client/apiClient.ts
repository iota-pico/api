import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { IApiClient } from "../interfaces/IApiClient";
import { IAddNeighborsRequest } from "../models/IAddNeighborsRequest";
import { IAddNeighborsResponse } from "../models/IAddNeighborsResponse";
import { IAttachToTangleRequest } from "../models/IAttachToTangleRequest";
import { IAttachToTangleResponse } from "../models/IAttachToTangleResponse";
import { IBroadcastTransactionsRequest } from "../models/IBroadcastTransactionsRequest";
import { ICheckConsistencyRequest } from "../models/ICheckConsistencyRequest";
import { ICheckConsistencyResponse } from "../models/ICheckConsistencyResponse";
import { IFindTransactionsRequest } from "../models/IFindTransactionsRequest";
import { IFindTransactionsResponse } from "../models/IFindTransactionsResponse";
import { IGetBalancesRequest } from "../models/IGetBalancesRequest";
import { IGetBalancesResponse } from "../models/IGetBalancesResponse";
import { IGetInclusionStatesRequest } from "../models/IGetInclusionStatesRequest";
import { IGetInclusionStatesResponse } from "../models/IGetInclusionStatesResponse";
import { IGetMissingTransactionsResponse } from "../models/IGetMissingTransactionsResponse";
import { IGetNeighborsResponse } from "../models/IGetNeighborsResponse";
import { IGetNodeInfoResponse } from "../models/IGetNodeInfoResponse";
import { IGetTipsResponse } from "../models/IGetTipsResponse";
import { IGetTransactionsToApproveRequest } from "../models/IGetTransactionsToApproveRequest";
import { IGetTransactionsToApproveResponse } from "../models/IGetTransactionsToApproveResponse";
import { IGetTrytesRequest } from "../models/IGetTrytesRequest";
import { IGetTrytesResponse } from "../models/IGetTrytesResponse";
import { IRemoveNeighborsRequest } from "../models/IRemoveNeighborsRequest";
import { IRemoveNeighborsResponse } from "../models/IRemoveNeighborsResponse";
import { IStoreTransactionsRequest } from "../models/IStoreTransactionsRequest";
import { IWereAddressesSpentFromRequest } from "../models/IWereAddressesSpentFromRequest";
import { IWereAddressesSpentFromResponse } from "../models/IWereAddressesSpentFromResponse";

/**
 * Default implementation of an api client.
 * @interface
 */
export class ApiClient implements IApiClient {
    /* @internal */
    private readonly _networkClient: INetworkClient;
    /* @internal */
    private readonly _apiVersion: string;
    /* @internal */
    private readonly _additionalHeaders?: { [header: string]: string };

    /**
     * Create an instance of ApiClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     */
    constructor(networkClient: INetworkClient, apiVersion: string, additionalHeaders?: { [header: string]: string }) {
        if (networkClient === undefined || networkClient === null) {
            throw new CoreError("The networkClient must be defined");
        }
        if (apiVersion === undefined || apiVersion === null || apiVersion.length === 0) {
            throw new CoreError("The apiVersion must be defined");
        }
        this._networkClient = networkClient;
        this._apiVersion = apiVersion;
        this._additionalHeaders = additionalHeaders;
    }

    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    public async getNodeInfo(): Promise<IGetNodeInfoResponse> {
        return this.sendCommand<{}, IGetNodeInfoResponse>("getNodeInfo", {});
    }

    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    public async getNeighbors(): Promise<IGetNeighborsResponse> {
        return this.sendCommand<{}, IGetNeighborsResponse>("getNeighbors", {});
    }

    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    public async addNeighbors(request: IAddNeighborsRequest): Promise<IAddNeighborsResponse> {
        return this.sendCommand<IAddNeighborsRequest, IAddNeighborsResponse>("addNeighbors", request);
    }

    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    public async removeNeighbors(request: IRemoveNeighborsRequest): Promise<IRemoveNeighborsResponse> {
        return this.sendCommand<IRemoveNeighborsRequest, IRemoveNeighborsResponse>("removeNeighbors", request);
    }

    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    public async getTips(): Promise<IGetTipsResponse> {
        return this.sendCommand<{}, IGetTipsResponse>("getTips", {});
    }

    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    public async findTransactions(request: IFindTransactionsRequest): Promise<IFindTransactionsResponse> {
        return this.sendCommand<IFindTransactionsRequest, IFindTransactionsResponse>("findTransactions", request);
    }

    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    public async getTrytes(request: IGetTrytesRequest): Promise<IGetTrytesResponse> {
        return this.sendCommand<IGetTrytesRequest, IGetTrytesResponse>("getTrytes", request);
    }

    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    public async getInclusionStates(request: IGetInclusionStatesRequest): Promise<IGetInclusionStatesResponse> {
        return this.sendCommand<IGetInclusionStatesRequest, IGetInclusionStatesResponse>("getInclusionStates", request);
    }

    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    public async getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse> {
        return this.sendCommand<IGetBalancesRequest, IGetBalancesResponse>("getBalances", request);
    }

    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    public async getTransactionsToApprove(request: IGetTransactionsToApproveRequest): Promise<IGetTransactionsToApproveResponse> {
        return this.sendCommand<IGetTransactionsToApproveRequest, IGetTransactionsToApproveResponse>("getTransactionsToApprove", request);
    }

    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    public async attachToTangle(request: IAttachToTangleRequest): Promise<IAttachToTangleResponse> {
        return this.sendCommand<IAttachToTangleRequest, IAttachToTangleResponse>("attachToTangle", request);
    }

    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    public async interruptAttachingToTangle(): Promise<void> {
        return this.sendCommand<{}, void>("interruptAttachingToTangle", {});
    }

    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    public async broadcastTransactions(request: IBroadcastTransactionsRequest): Promise<void> {
        return this.sendCommand<IBroadcastTransactionsRequest, void>("broadcastTransactions", request);
    }

    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    public async storeTransactions(request: IStoreTransactionsRequest): Promise<void> {
        return this.sendCommand<IStoreTransactionsRequest, void>("storeTransactions", request);
    }

    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    public async getMissingTransactions(): Promise<IGetMissingTransactionsResponse> {
        return this.sendCommand<{}, IGetMissingTransactionsResponse>("getMissingTransactions", {});
    }

    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    public async checkConsistency(request: ICheckConsistencyRequest): Promise<ICheckConsistencyResponse> {
        return this.sendCommand<ICheckConsistencyRequest, ICheckConsistencyResponse>("checkConsistency", request);
    }

    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    public async wereAddressesSpentFrom(request: IWereAddressesSpentFromRequest): Promise<IWereAddressesSpentFromResponse> {
        return this.sendCommand<IWereAddressesSpentFromRequest, IWereAddressesSpentFromResponse>("wereAddressesSpentFrom", request);
    }

    /* @internal */
    private async sendCommand<T, U>(command: string, request: T): Promise<U> {
        Object.defineProperty(request, "command", {
            value: command,
            enumerable: true
        });
        return this._networkClient.postJson<T, U>(request, this.createHeaders())
            .catch((err: CoreError) => {
                if (err.additional && err.additional.response) {
                    try {
                        const commandError = JSON.parse(err.additional.response);
                        if (commandError.error) {
                            delete err.additional.response;
                            err.additional.commandError = commandError.error;
                        } else if (commandError.exception) {
                            delete err.additional.response;
                            err.additional.commandError = commandError.exception;
                        }
                    } catch (e) {
                    }
                }
                throw err;
            });
    }

    /* @internal */
    private createHeaders(): { [headers: string]: string } {
        const headers = this._additionalHeaders || {};
        headers["X-IOTA-API-Version"] = this._apiVersion;
        return headers;
    }
}
