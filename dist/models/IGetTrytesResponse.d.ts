import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from getTrytes command.
 * @interface
 */
export interface IGetTrytesResponse extends ICommonResponse {
    /**
     * Trytes of the requested hashes.
     */
    trytes: string[];
}
