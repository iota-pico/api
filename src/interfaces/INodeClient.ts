import { IError } from "@iota-pico/core/dist/interfaces/IError";
import { IGetBalancesRequest } from "../models/IGetBalancesRequest";
import { IGetBalancesResponse } from "../models/IGetBalancesResponse";
import { IGetNodeInfoRequest } from "../models/IGetNodeInfoRequest";
import { IGetNodeInfoResponse } from "../models/IGetNodeInfoResponse";

/**
 * Represents a client for performing communication with a node.
 * @interface
 */
export interface INodeClient {
    /**
     * Returns information about your node.
     * @param request The getNodeInfo request object.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    getNodeInfo(request: IGetNodeInfoRequest): Promise<IGetNodeInfoResponse | IError>;

    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse | IError>;
}
