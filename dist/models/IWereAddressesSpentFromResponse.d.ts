import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from wereAddressesSpentFrom command.
 * @interface
 */
export interface IWereAddressesSpentFromResponse extends ICommonResponse {
    /**
     * States which are true if the corresponding input address was spent from.
     */
    states: boolean[];
}
