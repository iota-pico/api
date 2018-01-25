/**
 * Represents the response from getBalances command.
 * @interface
 */
export interface IGetBalancesResponse {
    /**
     * List of balances for the addresses.
     */
    balances: string[];
    /**
     * The duration.
     */
    duration: number;
    /**
     * The milestone at which the balances were calculated.
     */
    milestone: string;
    /**
     * The milestone index at which the balances were calculated.
     */
    milestoneIndex: number;
}
