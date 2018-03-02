import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from getTransactionsToApprove command.
 * @interface
 */
export interface IGetTransactionsToApproveResponse extends ICommonResponse {
    /**
     * The trunk transaction.
     */
    trunkTransaction: string;
    /**
     * The branch transaction.
     */
    branchTransaction: string;
}
