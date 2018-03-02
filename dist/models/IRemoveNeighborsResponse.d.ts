import { ICommonResponse } from "./ICommonResponse";
/**
 * Represents the response from removeNeighbors command.
 * @interface
 */
export interface IRemoveNeighborsResponse extends ICommonResponse {
    /**
     * The number of neighbours removed.
     */
    removedNeighbors: number;
}
