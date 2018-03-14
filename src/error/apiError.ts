import { CoreError } from "@iota-pico/core/dist/error/coreError";

/**
 * An api implementation of an error.
 */
export class ApiError extends CoreError {
    /**
     * Create an instance of ApiError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: { [id: string]: any }, innerError?: Error) {
        super(message, additional, innerError);
        this.domain = "API";
    }
}
