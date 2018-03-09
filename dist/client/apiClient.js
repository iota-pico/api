Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
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
     */
    constructor(networkClient, apiVersion = "1", additionalHeaders) {
        if (objectHelper_1.ObjectHelper.isEmpty(networkClient)) {
            throw new apiError_1.ApiError("The networkClient must be defined");
        }
        if (stringHelper_1.StringHelper.isEmpty(apiVersion)) {
            throw new apiError_1.ApiError("The apiVersion must not be empty");
        }
        this._networkClient = networkClient;
        this._apiVersion = apiVersion;
        this._additionalHeaders = additionalHeaders;
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
        Object.defineProperty(request, "command", {
            value: command,
            enumerable: true
        });
        return this._networkClient.postJson(request, undefined, this.createHeaders())
            .catch((err) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9hcGlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUV6RSxnREFBNkM7QUE4QjdDOztHQUVHO0FBQ0g7SUFRSTs7Ozs7T0FLRztJQUNILFlBQVksYUFBNkIsRUFBRSxhQUFxQixHQUFHLEVBQUUsaUJBQWdEO1FBQ2pILEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUksbUJBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLG1CQUFRLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsV0FBVztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBMkIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLFlBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQTRCLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBNkI7UUFDbkQsRUFBRSxDQUFDLENBQUMs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