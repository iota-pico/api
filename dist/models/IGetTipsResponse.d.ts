import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from getTips command.
 * @interface
 */
export interface IGetTipsResponse extends ICommonResponse {
    /**
     * The hashes for the tips.
     */
    hashes: string[];
}
