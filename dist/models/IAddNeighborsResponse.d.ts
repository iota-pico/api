import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from addNeighbors command.
 * @interface
 */
export interface IAddNeighborsResponse extends ICommonResponse {
    /**
     * The number of neighbours added.
     */
    addedNeighbors: number;
}
