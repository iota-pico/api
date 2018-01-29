import { INeighbor } from "./INeighbor";

/**
 * Represents the response from getNeighbors command.
 * @interface
 */
export interface IGetNeighborsResponse {
    /**
     * The duration.
     */
    duration: number;
    /**
     * The neighbors of the node.
     */
    neighbors: INeighbor[];
}
