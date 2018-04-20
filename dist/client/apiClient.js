Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const nullLogger_1 = require("@iota-pico/core/dist/loggers/nullLogger");
const apiError_1 = require("../error/apiError");
/**
 * Default implementation of an api client.
 */
class ApiClient {
    /**
     * Create an instance of ApiClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     * @param logger Logger to send communication info to.
     */
    constructor(networkClient, apiVersion = "1", additionalHeaders, logger) {
        if (objectHelper_1.ObjectHelper.isEmpty(networkClient)) {
            throw new apiError_1.ApiError("The networkClient must be defined");
        }
        if (stringHelper_1.StringHelper.isEmpty(apiVersion)) {
            throw new apiError_1.ApiError("The apiVersion must not be empty");
        }
        this._networkClient = networkClient;
        this._apiVersion = apiVersion;
        this._additionalHeaders = additionalHeaders;
        this._logger = logger || new nullLogger_1.NullLogger();
    }
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    async getNodeInfo() {
        return this.sendCommand("getNodeInfo", {});
    }
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    async getNeighbors() {
        return this.sendCommand("getNeighbors", {});
    }
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    async addNeighbors(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
            throw new apiError_1.ApiError("The request.uris must not be empty");
        }
        return this.sendCommand("addNeighbors", request);
    }
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    async removeNeighbors(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
            throw new apiError_1.ApiError("The request.uris must not be empty");
        }
        return this.sendCommand("removeNeighbors", request);
    }
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    async getTips() {
        return this.sendCommand("getTips", {});
    }
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    async findTransactions(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        const bundlesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.bundles);
        const addressesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.addresses);
        const tagsEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.tags);
        const approveesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.approvees);
        if (bundlesEmpty && addressesEmpty && tagsEmpty && approveesEmpty) {
            throw new apiError_1.ApiError("One of the bundle, addresses, tags or approvees must not be empty");
        }
        return this.sendCommand("findTransactions", request);
    }
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    async getTrytes(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.hashes)) {
            throw new apiError_1.ApiError("The request.hashes must not be empty");
        }
        return this.sendCommand("getTrytes", request);
    }
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    async getInclusionStates(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.transactions)) {
            throw new apiError_1.ApiError("The request.transactions must not be empty");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.tips)) {
            throw new apiError_1.ApiError("The request.tips must not be empty");
        }
        return this.sendCommand("getInclusionStates", request);
    }
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    async getBalances(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.addresses)) {
            throw new apiError_1.ApiError("The request.addresses must not be empty");
        }
        if (!numberHelper_1.NumberHelper.isInteger(request.threshold)) {
            throw new apiError_1.ApiError("The request.threshold must be a valid number");
        }
        return this.sendCommand("getBalances", request);
    }
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    async getTransactionsToApprove(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(request.depth)) {
            throw new apiError_1.ApiError("The request.depth must be a valid number");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(request.reference) && stringHelper_1.StringHelper.isEmpty(request.reference)) {
            throw new apiError_1.ApiError("The request.reference must be a non empty string");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(request.numWalks) && !numberHelper_1.NumberHelper.isInteger(request.numWalks)) {
            throw new apiError_1.ApiError("The request.numWalks must be a valid number");
        }
        return this.sendCommand("getTransactionsToApprove", request);
    }
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    async attachToTangle(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (stringHelper_1.StringHelper.isEmpty(request.trunkTransaction)) {
            throw new apiError_1.ApiError("The request.trunkTransaction must not be empty");
        }
        if (stringHelper_1.StringHelper.isEmpty(request.branchTransaction)) {
            throw new apiError_1.ApiError("The request.branchTransaction must not be empty");
        }
        if (!numberHelper_1.NumberHelper.isInteger(request.minWeightMagnitude)) {
            throw new apiError_1.ApiError("The request.minWeightMagnitude must be a valid number");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
            throw new apiError_1.ApiError("The request.trytes must not be empty");
        }
        return this.sendCommand("attachToTangle", request);
    }
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    async interruptAttachingToTangle() {
        return this.sendCommand("interruptAttachingToTangle", {});
    }
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    async broadcastTransactions(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
            throw new apiError_1.ApiError("The request.trytes must not be empty");
        }
        return this.sendCommand("broadcastTransactions", request);
    }
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    async storeTransactions(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
            throw new apiError_1.ApiError("The request.trytes must not be empty");
        }
        return this.sendCommand("storeTransactions", request);
    }
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    async getMissingTransactions() {
        return this.sendCommand("getMissingTransactions", {});
    }
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    async checkConsistency(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.tails)) {
            throw new apiError_1.ApiError("The request.tails must not be empty");
        }
        return this.sendCommand("checkConsistency", request);
    }
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    async wereAddressesSpentFrom(request) {
        if (objectHelper_1.ObjectHelper.isEmpty(request)) {
            throw new apiError_1.ApiError("The request must be defined");
        }
        if (arrayHelper_1.ArrayHelper.isEmpty(request.addresses)) {
            throw new apiError_1.ApiError("The request.addresses must not be empty");
        }
        return this.sendCommand("wereAddressesSpentFrom", request);
    }
    /* @internal */
    async sendCommand(command, request) {
        this._logger.info(`===> ApiClient::${command}`, request);
        Object.defineProperty(request, "command", {
            value: command,
            enumerable: true
        });
        return this._networkClient.postJson(request, undefined, this.createHeaders())
            .then((response) => {
            this._logger.info(`===> ${command}`, response);
            return response;
        })
            .catch((err) => {
            this._logger.error(`===> ${command} Error`, err);
            if (err.additional && err.additional.errorResponse) {
                try {
                    const apiError = JSON.parse(err.additional.errorResponse);
                    if (apiError.error) {
                        delete err.additional.errorResponse;
                        err.additional.apiError = apiError.error;
                    }
                    else if (apiError.exception) {
                        delete err.additional.errorResponse;
                        err.additional.apiError = apiError.exception;
                    }
                }
                catch (e) {
                }
            }
            throw err;
        });
    }
    /* @internal */
    createHeaders() {
        const headers = this._additionalHeaders || {};
        headers["X-IOTA-API-Version"] = this._apiVersion;
        return headers;
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9hcGlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUd6RSx3RUFBcUU7QUFDckUsZ0RBQTZDO0FBOEI3Qzs7R0FFRztBQUNIO0lBVUk7Ozs7OztPQU1HO0lBQ0gsWUFBWSxhQUE2QixFQUFFLGFBQXFCLEdBQUcsRUFBRSxpQkFBZ0QsRUFBRSxNQUFnQjtRQUNuSSxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBMkIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUE0QixjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQTZC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