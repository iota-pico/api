import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { IError } from "@iota-pico/core/dist/interfaces/IError";
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
export class NodeClient implements INodeClient {
    private readonly _networkClient: INetworkClient;
    private readonly _apiVersion: string;
    private readonly _additionalHeaders?: { [header: string]: string };

    /**
     * Create an instance of NodeClient.
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

    private async sendCommand<T, U>(command: string, request: T): Promise<U> {
        Object.defineProperty(request, "command", {
            value: command,
            enumerable: true
        });
        return this._networkClient.postJson<T, U>(request, this.createHeaders())
            .catch((err: IError) => {
                if (err.additional && err.additional.response) {
                    try {
                        const commandError = JSON.parse(err.additional.response);
                        if (commandError.error) {
                            delete err.additional.response;
                            err.additional.commandError = commandError.error;
                        }
                    } catch (e) {
                    }
                }
                throw err;
            });
    }

    private createHeaders(): { [headers: string]: string } {
        const headers = this._additionalHeaders || {};
        headers["X-IOTA-API-Version"] = this._apiVersion;
        return headers;
    }
}
