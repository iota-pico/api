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
     * @param request The add neighbours request object.
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
     * @param request The remove neighbours request object.
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
     * @param request The find transactions request object.
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
     * @param request The get trytes request object.
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
     * @param request The get inclusion states request object.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9hcGlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUd6RSx3RUFBcUU7QUFDckUsZ0RBQTZDO0FBOEI3Qzs7R0FFRztBQUNIO0lBVUk7Ozs7OztPQU1HO0lBQ0gsWUFBWSxhQUE2QixFQUFFLGFBQXFCLEdBQUcsRUFBRSxpQkFBZ0QsRUFBRSxNQUFnQjtRQUNuSSxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBMkIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUE0QixjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUE2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