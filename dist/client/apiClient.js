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
        this._logger.info(`===> ${command}`, request);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9hcGlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUd6RSx3RUFBcUU7QUFDckUsZ0RBQTZDO0FBOEI3Qzs7R0FFRztBQUNIO0lBVUk7Ozs7OztPQU1HO0lBQ0gsWUFBWSxhQUE2QixFQUFFLGFBQXFCLEdBQUcsRUFBRSxpQkFBZ0QsRUFBRSxNQUFnQjtRQUNuSSxFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLG1CQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sSUFBSSxtQkFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFdBQVc7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQTJCLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxZQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUE0QixjQUFjLEVBQUUsRUFBRSxDQUFD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