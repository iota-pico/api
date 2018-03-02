import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from getBalances command.
 * @interface
 */
export interface IGetBalancesResponse extends ICommonResponse {
    /**
     * List of balances for the addresses.
     */
    balances: string[];
    /**
     * The milestone at which the balances were calculated.
     */
    milestone: string;
    /**
     * The milestone index at which the balances were calculated.
     */
    milestoneIndex: number;
}
