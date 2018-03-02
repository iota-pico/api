import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from getMissingTransactions command.
 * @interface
 */
export interface IGetMissingTransactionsResponse extends ICommonResponse {
    /**
     * The transactions with missing references.
     */
    hashes: string[];
}
