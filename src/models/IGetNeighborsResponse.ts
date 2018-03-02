import { ICommonResponse } from "./ICommonResponse";
import { INeighbor } from "./INeighbor";

/**
 * Represents the response from getNeighbors command.
 * @interface
 */
export interface IGetNeighborsResponse extends ICommonResponse {
    /**
     * The neighbors of the node.
     */
    neighbors: INeighbor[];
}
