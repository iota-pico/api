import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from checkConsistency command.
 * @interface
 */
export interface ICheckConsistencyResponse extends ICommonResponse {
    /**
     * Is the tail reference consistent.
     */
    state: boolean;
    /**
     * Is the tail reference consistent.
     */
    info: string;
}
