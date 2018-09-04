(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/helpers/stringHelper"), require("@iota-pico/core/dist/loggers/nullLogger"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/api", ["@iota-pico/core/dist/error/coreError", "@iota-pico/core/dist/helpers/arrayHelper", "@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/core/dist/helpers/stringHelper", "@iota-pico/core/dist/loggers/nullLogger"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/api"] = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/helpers/stringHelper"), require("@iota-pico/core/dist/loggers/nullLogger"));
	else
		root["IotaPicoApi"] = factory(root["@iota-pico/core/dist/error/coreError"], root["@iota-pico/core/dist/helpers/arrayHelper"], root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/core/dist/helpers/stringHelper"], root["@iota-pico/core/dist/loggers/nullLogger"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_stringHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist.es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.es6/client/apiClient.js":
/*!**************************************!*\
  !*** ./dist.es6/client/apiClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "@iota-pico/core/dist/helpers/stringHelper");
const nullLogger_1 = __webpack_require__(/*! @iota-pico/core/dist/loggers/nullLogger */ "@iota-pico/core/dist/loggers/nullLogger");
const apiError_1 = __webpack_require__(/*! ../error/apiError */ "./dist.es6/error/apiError.js");
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
    getNodeInfo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sendCommand("getNodeInfo", {});
        });
    }
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    getNeighbors() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sendCommand("getNeighbors", {});
        });
    }
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @param request The add neighbours request object.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    addNeighbors(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
                throw new apiError_1.ApiError("The request.uris must not be empty");
            }
            return this.sendCommand("addNeighbors", request);
        });
    }
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @param request The remove neighbours request object.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    removeNeighbors(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
                throw new apiError_1.ApiError("The request.uris must not be empty");
            }
            return this.sendCommand("removeNeighbors", request);
        });
    }
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    getTips() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sendCommand("getTips", {});
        });
    }
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @param request The find transactions request object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    findTransactions(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @param request The get trytes request object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    getTrytes(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.hashes)) {
                throw new apiError_1.ApiError("The request.hashes must not be empty");
            }
            return this.sendCommand("getTrytes", request);
        });
    }
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @param request The get inclusion states request object.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    getInclusionStates(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    getTransactionsToApprove(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    attachToTangle(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    interruptAttachingToTangle() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sendCommand("interruptAttachingToTangle", {});
        });
    }
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    broadcastTransactions(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
                throw new apiError_1.ApiError("The request.trytes must not be empty");
            }
            return this.sendCommand("broadcastTransactions", request);
        });
    }
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    storeTransactions(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
                throw new apiError_1.ApiError("The request.trytes must not be empty");
            }
            return this.sendCommand("storeTransactions", request);
        });
    }
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    getMissingTransactions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sendCommand("getMissingTransactions", {});
        });
    }
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    checkConsistency(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.tails)) {
                throw new apiError_1.ApiError("The request.tails must not be empty");
            }
            return this.sendCommand("checkConsistency", request);
        });
    }
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    wereAddressesSpentFrom(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (objectHelper_1.ObjectHelper.isEmpty(request)) {
                throw new apiError_1.ApiError("The request must be defined");
            }
            if (arrayHelper_1.ArrayHelper.isEmpty(request.addresses)) {
                throw new apiError_1.ApiError("The request.addresses must not be empty");
            }
            return this.sendCommand("wereAddressesSpentFrom", request);
        });
    }
    /* @internal */
    sendCommand(command, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9hcGlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFHekUsd0VBQXFFO0FBQ3JFLGdEQUE2QztBQThCN0M7O0dBRUc7QUFDSCxNQUFhLFNBQVM7SUFVbEI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxhQUE2QixFQUFFLGFBQXFCLEdBQUcsRUFBRSxpQkFBZ0QsRUFBRSxNQUFnQjtRQUNuSSxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUNVLFdBQVc7O1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBMkIsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVEOzs7O09BSUc7SUFDVSxZQUFZOztZQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQTRCLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNVLFlBQVksQ0FBQyxPQUE2Qjs7WUFD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

/***/ }),

/***/ "./dist.es6/error/apiError.js":
/*!************************************!*\
  !*** ./dist.es6/error/apiError.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "@iota-pico/core/dist/error/coreError");
/**
 * An api implementation of an error.
 */
class ApiError extends coreError_1.CoreError {
    /**
     * Create an instance of ApiError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "API";
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IvYXBpRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLHFCQUFTO0lBQ25DOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUFlLEVBQUUsVUFBa0MsRUFBRSxVQUFrQjtRQUMvRSxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFYRCw0QkFXQyJ9

/***/ }),

/***/ "./dist.es6/index.js":
/*!***************************!*\
  !*** ./dist.es6/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(__webpack_require__(/*! ./client/apiClient */ "./dist.es6/client/apiClient.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./error/apiError */ "./dist.es6/error/apiError.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILDZEQUFtQztBQUNuQywyREFBaUMifQ==

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "@iota-pico/core/dist/error/coreError":
/*!*******************************************************!*\
  !*** external "@iota-pico/core/dist/error/coreError" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/arrayHelper":
/*!***********************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/arrayHelper" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/stringHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/stringHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_stringHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/loggers/nullLogger":
/*!**********************************************************!*\
  !*** external "@iota-pico/core/dist/loggers/nullLogger" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0FwaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29BcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29BcGkvLi9kaXN0LmVzNi9jbGllbnQvYXBpQ2xpZW50LmpzIiwid2VicGFjazovL0lvdGFQaWNvQXBpLy4vZGlzdC5lczYvZXJyb3IvYXBpRXJyb3IuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29BcGkvLi9kaXN0LmVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0FwaS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29BcGkvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0FwaS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0FwaS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29BcGkvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvQXBpL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0FwaS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQU87QUFDL0Isc0JBQXNCLG1CQUFPLENBQUMsMEZBQTBDO0FBQ3hFLHVCQUF1QixtQkFBTyxDQUFDLDRGQUEyQztBQUMxRSx1QkFBdUIsbUJBQU8sQ0FBQyw0RkFBMkM7QUFDMUUsdUJBQXVCLG1CQUFPLENBQUMsNEZBQTJDO0FBQzFFLHFCQUFxQixtQkFBTyxDQUFDLHdGQUF5QztBQUN0RSxtQkFBbUIsbUJBQU8sQ0FBQyx1REFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LDJCQUEyQix5REFBeUQ7QUFDcEY7O0FBRU87QUFDUDtBQUNBLGlCQUFpQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDNUkseUJBQXlCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDako7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHNGQUFzRixhQUFhLEVBQUU7QUFDaE4sc0JBQXNCLDhCQUE4QixnREFBZ0QsdURBQXVELEVBQUUsRUFBRSxHQUFHO0FBQ2xLLDRDQUE0QyxzQ0FBc0MsVUFBVSxvQkFBb0IsRUFBRSxFQUFFLFVBQVU7QUFDOUg7O0FBRU87QUFDUCxnQ0FBZ0MsdUNBQXVDLGFBQWEsRUFBRSxFQUFFLE9BQU8sa0JBQWtCO0FBQ2pIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7Ozs7Ozs7Ozs7OztBQ3pMQSxrRjs7Ozs7Ozs7Ozs7QUNBQSxzRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSxxRiIsImZpbGUiOiJpb3RhLXBpY28tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vYXBpXCIsIFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9hcGlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb0FwaVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfY29yZUVycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2xvZ2dlcnNfbnVsbExvZ2dlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0LmVzNi9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCBudWxsTG9nZ2VyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIpO1xyXG5jb25zdCBhcGlFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2FwaUVycm9yXCIpO1xyXG4vKipcclxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBhbiBhcGkgY2xpZW50LlxyXG4gKi9cclxuY2xhc3MgQXBpQ2xpZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEFwaUNsaWVudC5cclxuICAgICAqIEBwYXJhbSBuZXR3b3JrQ2xpZW50IFRoZSBuZXR3b3JrIGNsaWVudCB0byBjb21tdW5pY2F0ZSB0aHJvdWdoLlxyXG4gICAgICogQHBhcmFtIGFwaVZlcnNpb24gVGhlIEFQSSB2ZXJzaW9uIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdHMuXHJcbiAgICAgKiBAcGFyYW0gbG9nZ2VyIExvZ2dlciB0byBzZW5kIGNvbW11bmljYXRpb24gaW5mbyB0by5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmV0d29ya0NsaWVudCwgYXBpVmVyc2lvbiA9IFwiMVwiLCBhZGRpdGlvbmFsSGVhZGVycywgbG9nZ2VyKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5ldHdvcmtDbGllbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIG5ldHdvcmtDbGllbnQgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoYXBpVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgYXBpVmVyc2lvbiBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya0NsaWVudCA9IG5ldHdvcmtDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IGFwaVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbEhlYWRlcnMgPSBhZGRpdGlvbmFsSGVhZGVycztcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXIgfHwgbmV3IG51bGxMb2dnZXJfMS5OdWxsTG9nZ2VyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBub2RlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgZ2V0Tm9kZUluZm8gcmVzcG9uc2Ugb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZ2V0Tm9kZUluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImdldE5vZGVJbmZvXCIsIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgc2V0IG9mIG5laWdoYm9ycyB5b3UgYXJlIGNvbm5lY3RlZCB3aXRoLCBhcyB3ZWxsIGFzIHRoZWlyIGFjdGl2aXR5IGNvdW50LlxyXG4gICAgICogVGhlIGFjdGl2aXR5IGNvdW50ZXIgaXMgcmVzZXQgYWZ0ZXIgcmVzdGFydGluZyBJUkkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBnZXROZWlnaGJvcnMgcmVzcG9uc2Ugb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZ2V0TmVpZ2hib3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJnZXROZWlnaGJvcnNcIiwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsaXN0IG9mIG5laWdoYm9ycyB0byB5b3VyIG5vZGUuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IHRoaXMgaXMgb25seSB0ZW1wb3JhcnksXHJcbiAgICAgKiBhbmQgdGhlIGFkZGVkIG5laWdoYm9ycyB3aWxsIGJlIHJlbW92ZWQgZnJvbSB5b3VyIHNldCBvZiBuZWlnaGJvcnMgYWZ0ZXIgeW91IHJlbGF1bmNoIElSSS5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFRoZSBhZGQgbmVpZ2hib3VycyByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGFkZE5laWdoYm9ycyByZXNwb25zZSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhZGROZWlnaGJvcnMocmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QudXJpcykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QudXJpcyBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImFkZE5laWdoYm9yc1wiLCByZXF1ZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGxpc3Qgb2YgbmVpZ2hib3JzIGZyb20geW91ciBub2RlLiBUaGlzIGlzIG9ubHkgdGVtcG9yYXJ5LCBhbmQgaWYgeW91IGhhdmUgeW91clxyXG4gICAgICogbmVpZ2hib3JzIGFkZGVkIHZpYSB0aGUgY29tbWFuZCBsaW5lLCB0aGV5IHdpbGwgYmUgcmV0YWluZWQgYWZ0ZXIgeW91IHJlc3RhcnQgeW91ciBub2RlLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIHJlbW92ZSBuZWlnaGJvdXJzIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmVtb3ZlTmVpZ2hib3JzIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU5laWdoYm9ycyhyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC51cmlzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC51cmlzIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRDb21tYW5kKFwicmVtb3ZlTmVpZ2hib3JzXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHRpcHMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBnZXRUaXBzIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGdldFRpcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImdldFRpcHNcIiwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHRoZSB0cmFuc2FjdGlvbnMgd2hpY2ggbWF0Y2ggdGhlIHNwZWNpZmllZCBpbnB1dCBhbmQgcmV0dXJuLiBBbGwgaW5wdXQgdmFsdWVzIGFyZSBsaXN0cyxcclxuICAgICAqIGZvciB3aGljaCBhIGxpc3Qgb2YgcmV0dXJuIHZhbHVlcyAodHJhbnNhY3Rpb24gaGFzaGVzKSwgaW4gdGhlIHNhbWUgb3JkZXIsIGlzIHJldHVybmVkIGZvciBhbGxcclxuICAgICAqIGluZGl2aWR1YWwgZWxlbWVudHMuIFRoZSBpbnB1dCBmaWVsZHMgY2FuIGVpdGhlciBiZSBidW5kbGVzLCBhZGRyZXNzZXMsIHRhZ3Mgb3IgYXBwcm92ZWVzLlxyXG4gICAgICogVXNpbmcgbXVsdGlwbGUgb2YgdGhlc2UgaW5wdXQgZmllbGRzIHJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgdmFsdWVzLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIGZpbmQgdHJhbnNhY3Rpb25zIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgZmluZFRyYW5zYWN0aW9ucyByZXNwb25zZSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBmaW5kVHJhbnNhY3Rpb25zKHJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyZXF1ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnVuZGxlc0VtcHR5ID0gYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QuYnVuZGxlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3Nlc0VtcHR5ID0gYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QuYWRkcmVzc2VzKTtcclxuICAgICAgICAgICAgY29uc3QgdGFnc0VtcHR5ID0gYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QudGFncyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVlc0VtcHR5ID0gYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QuYXBwcm92ZWVzKTtcclxuICAgICAgICAgICAgaWYgKGJ1bmRsZXNFbXB0eSAmJiBhZGRyZXNzZXNFbXB0eSAmJiB0YWdzRW1wdHkgJiYgYXBwcm92ZWVzRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiT25lIG9mIHRoZSBidW5kbGUsIGFkZHJlc3NlcywgdGFncyBvciBhcHByb3ZlZXMgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJmaW5kVHJhbnNhY3Rpb25zXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSByYXcgdHJhbnNhY3Rpb24gZGF0YSAodHJ5dGVzKSBvZiBhIHNwZWNpZmljIHRyYW5zYWN0aW9uLlxyXG4gICAgICogVGhlc2UgdHJ5dGVzIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgaW50byB0aGUgYWN0dWFsIHRyYW5zYWN0aW9uIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFRoZSBnZXQgdHJ5dGVzIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgZmluZFRyYW5zYWN0aW9ucyByZXNwb25zZSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBnZXRUcnl0ZXMocmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QuaGFzaGVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5oYXNoZXMgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJnZXRUcnl0ZXNcIiwgcmVxdWVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5jbHVzaW9uIHN0YXRlcyBvZiBhIHNldCBvZiB0cmFuc2FjdGlvbnMuIFRoaXMgaXMgZm9yIGRldGVybWluaW5nIGlmIGEgdHJhbnNhY3Rpb25cclxuICAgICAqIHdhcyBhY2NlcHRlZCBhbmQgY29uZmlybWVkIGJ5IHRoZSBuZXR3b3JrIG9yIG5vdC4gWW91IGNhbiBzZWFyY2ggZm9yIG11bHRpcGxlIHRpcHMgKGFuZCB0aHVzLFxyXG4gICAgICogbWlsZXN0b25lcykgdG8gZ2V0IHBhc3QgaW5jbHVzaW9uIHN0YXRlcyBvZiB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgZ2V0IGluY2x1c2lvbiBzdGF0ZXMgcmVxdWVzdCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBnZXRJbmNsdXNpb25TdGF0ZXMgcmVzcG9uc2Ugb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZ2V0SW5jbHVzaW9uU3RhdGVzKHJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyZXF1ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNFbXB0eShyZXF1ZXN0LnRyYW5zYWN0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QudHJhbnNhY3Rpb25zIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC50aXBzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC50aXBzIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRDb21tYW5kKFwiZ2V0SW5jbHVzaW9uU3RhdGVzXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjb25maXJtZWQgYmFsYW5jZSB3aGljaCBhIGxpc3Qgb2YgYWRkcmVzc2VzIGhhdmUgYXQgdGhlIGxhdGVzdCBjb25maXJtZWQgbWlsZXN0b25lLlxyXG4gICAgICogSW4gYWRkaXRpb24gdG8gdGhlIGJhbGFuY2VzLCBpdCBhbHNvIHJldHVybnMgdGhlIG1pbGVzdG9uZSBhcyB3ZWxsIGFzIHRoZSBpbmRleCB3aXRoIHdoaWNoIHRoZVxyXG4gICAgICogY29uZmlybWVkIGJhbGFuY2Ugd2FzIGRldGVybWluZWQuIFRoZSBiYWxhbmNlcyBpcyByZXR1cm5lZCBhcyBhIGxpc3QgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXHJcbiAgICAgKiBhZGRyZXNzZXMgd2VyZSBwcm92aWRlZCBhcyBpbnB1dC5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFRoZSBnZXRCYWxhbmNlcyByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGdldEJhbGFuY2VzIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGdldEJhbGFuY2VzKHJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyZXF1ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNFbXB0eShyZXF1ZXN0LmFkZHJlc3NlcykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QuYWRkcmVzc2VzIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihyZXF1ZXN0LnRocmVzaG9sZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QudGhyZXNob2xkIG11c3QgYmUgYSB2YWxpZCBudW1iZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJnZXRCYWxhbmNlc1wiLCByZXF1ZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGlwIHNlbGVjdGlvbiB3aGljaCByZXR1cm5zIHRydW5rVHJhbnNhY3Rpb24gYW5kIGJyYW5jaFRyYW5zYWN0aW9uLiBUaGUgaW5wdXQgdmFsdWUgaXMgZGVwdGgsXHJcbiAgICAgKiB3aGljaCBiYXNpY2FsbHkgZGV0ZXJtaW5lcyBob3cgbWFueSBidW5kbGVzIHRvIGdvIGJhY2sgdG8gZm9yIGZpbmRpbmcgdGhlIHRyYW5zYWN0aW9ucyB0byBhcHByb3ZlLlxyXG4gICAgICogVGhlIGhpZ2hlciB5b3VyIGRlcHRoIHZhbHVlLCB0aGUgbW9yZSBcImJhYnlzaXR0aW5nXCIgeW91IGRvIGZvciB0aGUgbmV0d29yayAoYXMgeW91IGhhdmUgdG8gY29uZmlybSBtb3JlIHRyYW5zYWN0aW9ucykuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgZ2V0VHJhbnNhY3Rpb25zVG9BcHByb3ZlIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgZ2V0VHJhbnNhY3Rpb25zVG9BcHByb3ZlIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGdldFRyYW5zYWN0aW9uc1RvQXBwcm92ZShyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihyZXF1ZXN0LmRlcHRoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5kZXB0aCBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdC5yZWZlcmVuY2UpICYmIHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHJlcXVlc3QucmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5yZWZlcmVuY2UgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyZXF1ZXN0Lm51bVdhbGtzKSAmJiAhbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihyZXF1ZXN0Lm51bVdhbGtzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5udW1XYWxrcyBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRDb21tYW5kKFwiZ2V0VHJhbnNhY3Rpb25zVG9BcHByb3ZlXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2hlcyB0aGUgc3BlY2lmaWVkIHRyYW5zYWN0aW9ucyAodHJ5dGVzKSB0byB0aGUgVGFuZ2xlIGJ5IGRvaW5nIFByb29mIG9mIFdvcmsuIFlvdSBuZWVkIHRvIHN1cHBseVxyXG4gICAgICogYnJhbmNoVHJhbnNhY3Rpb24gYXMgd2VsbCBhcyB0cnVua1RyYW5zYWN0aW9uIChiYXNpY2FsbHkgdGhlIHRpcHMgd2hpY2ggeW91J3JlIGdvaW5nIHRvIHZhbGlkYXRlIGFuZFxyXG4gICAgICogcmVmZXJlbmNlIHdpdGggdGhpcyB0cmFuc2FjdGlvbikgLSBib3RoIG9mIHdoaWNoIHlvdSdsbCBnZXQgdGhyb3VnaCB0aGUgZ2V0VHJhbnNhY3Rpb25zVG9BcHByb3ZlIEFQSSBjYWxsLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIGF0dGFjaFRvVGFuZ2xlIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgYXR0YWNoVG9UYW5nbGUgcmVzcG9uc2Ugb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXR0YWNoVG9UYW5nbGUocmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocmVxdWVzdC50cnVua1RyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC50cnVua1RyYW5zYWN0aW9uIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShyZXF1ZXN0LmJyYW5jaFRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5icmFuY2hUcmFuc2FjdGlvbiBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIocmVxdWVzdC5taW5XZWlnaHRNYWduaXR1ZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0Lm1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC50cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0LnRyeXRlcyBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImF0dGFjaFRvVGFuZ2xlXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnJ1cHRzIGFuZCBjb21wbGV0ZWx5IGFib3J0cyB0aGUgYXR0YWNoVG9UYW5nbGUgcHJvY2Vzc1xyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB3aXRoIGVtcHR5IHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGludGVycnVwdEF0dGFjaGluZ1RvVGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJpbnRlcnJ1cHRBdHRhY2hpbmdUb1RhbmdsZVwiLCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEJyb2FkY2FzdCBhIGxpc3Qgb2YgdHJhbnNhY3Rpb25zIHRvIGFsbCBuZWlnaGJvcnMuIFRoZSBpbnB1dCB0cnl0ZXMgZm9yIHRoaXMgY2FsbCBhcmUgcHJvdmlkZWQgYnkgYXR0YWNoVG9UYW5nbGUuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgYnJvYWRjYXN0VHJhbnNhY3Rpb25zIHJlcXVlc3Qgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB3aXRoIGVtcHR5IHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGJyb2FkY2FzdFRyYW5zYWN0aW9ucyhyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC50cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0LnRyeXRlcyBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImJyb2FkY2FzdFRyYW5zYWN0aW9uc1wiLCByZXF1ZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmUgdHJhbnNhY3Rpb25zIGludG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFRoZSB0cnl0ZXMgdG8gYmUgdXNlZCBmb3IgdGhpcyBjYWxsIGFyZSByZXR1cm5lZCBieSBhdHRhY2hUb1RhbmdsZS5cclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFRoZSBzdG9yZVRyYW5zYWN0aW9ucyByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgd2l0aCBlbXB0eSByZXNwb25zZSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdG9yZVRyYW5zYWN0aW9ucyhyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC50cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0LnRyeXRlcyBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcInN0b3JlVHJhbnNhY3Rpb25zXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdHJhbnNhY3Rpb25zIHdpdGggbWlzc2luZyByZWZlcmVuY2VzLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIGdldE1pc3NpbmdUcmFuc2FjdGlvbnMgcmVxdWVzdCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBnZXRNaXNzaW5nVHJhbnNhY3Rpb25zIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGdldE1pc3NpbmdUcmFuc2FjdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kQ29tbWFuZChcImdldE1pc3NpbmdUcmFuc2FjdGlvbnNcIiwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB0aGUgY29uc2lzdGVuY3kgb2YgdGFpbCBoYXNoZXMuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgY2hlY2tDb25zaXN0ZW5jeSByZXF1ZXN0IG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGNoZWNrQ29uc2lzdGVuY3kgcmVzcG9uc2Ugb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgY2hlY2tDb25zaXN0ZW5jeShyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkocmVxdWVzdC50YWlscykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBhcGlFcnJvcl8xLkFwaUVycm9yKFwiVGhlIHJlcXVlc3QudGFpbHMgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJjaGVja0NvbnNpc3RlbmN5XCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBIYXZlIHRoZSByZXF1ZXN0ZWQgYWRkcmVzc2VzIGJlZW4gc3BlbnQgZnJvbSBhbHJlYWR5LlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIHdlcmVBZGRyZXNzZXNTcGVudEZyb20gcmVxdWVzdCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSB3ZXJlQWRkcmVzc2VzU3BlbnRGcm9tIHJlc3BvbnNlIG9iamVjdCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHdlcmVBZGRyZXNzZXNTcGVudEZyb20ocmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYXBpRXJyb3JfMS5BcGlFcnJvcihcIlRoZSByZXF1ZXN0IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0VtcHR5KHJlcXVlc3QuYWRkcmVzc2VzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGFwaUVycm9yXzEuQXBpRXJyb3IoXCJUaGUgcmVxdWVzdC5hZGRyZXNzZXMgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoXCJ3ZXJlQWRkcmVzc2VzU3BlbnRGcm9tXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZW5kQ29tbWFuZChjb21tYW5kLCByZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhgPT09PiBBcGlDbGllbnQ6OiR7Y29tbWFuZH1gLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsIFwiY29tbWFuZFwiLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29tbWFuZCxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrQ2xpZW50LnBvc3RKc29uKHJlcXVlc3QsIHVuZGVmaW5lZCwgdGhpcy5jcmVhdGVIZWFkZXJzKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKGA9PT0+ICR7Y29tbWFuZH1gLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGA9PT0+ICR7Y29tbWFuZH0gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyci5hZGRpdGlvbmFsICYmIGVyci5hZGRpdGlvbmFsLmVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlFcnJvciA9IEpTT04ucGFyc2UoZXJyLmFkZGl0aW9uYWwuZXJyb3JSZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlFcnJvci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVyci5hZGRpdGlvbmFsLmVycm9yUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIuYWRkaXRpb25hbC5hcGlFcnJvciA9IGFwaUVycm9yLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFwaUVycm9yLmV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVyci5hZGRpdGlvbmFsLmVycm9yUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIuYWRkaXRpb25hbC5hcGlFcnJvciA9IGFwaUVycm9yLmV4Y2VwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUhlYWRlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuX2FkZGl0aW9uYWxIZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGhlYWRlcnNbXCJYLUlPVEEtQVBJLVZlcnNpb25cIl0gPSB0aGlzLl9hcGlWZXJzaW9uO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXBpQ2xpZW50ID0gQXBpQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJwUTJ4cFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyTnNhV1Z1ZEM5aGNHbERiR2xsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkhla1VzZDBWQlFYRkZPMEZCUTNKRkxHZEVRVUUyUXp0QlFUaENOME03TzBkQlJVYzdRVUZEU0N4TlFVRmhMRk5CUVZNN1NVRlZiRUk3T3pzN096dFBRVTFITzBsQlEwZ3NXVUZCV1N4aFFVRTJRaXhGUVVGRkxHRkJRWEZDTEVkQlFVY3NSVUZCUlN4cFFrRkJaMFFzUlVGQlJTeE5RVUZuUWp0UlFVTnVTU3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRk8xbEJRM0pETEUxQlFVMHNTVUZCU1N4dFFrRkJVU3hEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRNMFE3VVVGRFJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlEyeERMRTFCUVUwc1NVRkJTU3h0UWtGQlVTeERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE1VUTdVVUZEUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExHRkJRV0VzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU01UWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFbEJRVWtzU1VGQlNTeDFRa0ZCVlN4RlFVRkZMRU5CUVVNN1NVRkRPVU1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOVkxGZEJRVmM3TzFsQlEzQkNMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQk1rSXNZVUZCWVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVOQlFVTTdTMEZCUVR0SlFVVkVPenM3TzA5QlNVYzdTVUZEVlN4WlFVRlpPenRaUVVOeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVRSQ0xHTkJRV01zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSU3hEUVVGRE8wdEJRVUU3U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5WTEZsQlFWa3NRMEZCUXl4UFFVRTJRanM3V1VGRGJrUXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRMMElzVFVGQlRTeEpRVUZKTEcxQ1FVRlJMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0aFFVTnlSRHRaUVVORUxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTnVReXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzJGQlF6VkVPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUU0UXl4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJFY3NRMEZCUXp0TFFVRkJPMGxCUlVRN096czdPMDlCUzBjN1NVRkRWU3hsUVVGbExFTkJRVU1zVDBGQlowTTdPMWxCUTNwRUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlF5OUNMRTFCUVUwc1NVRkJTU3h0UWtGQlVTeERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU03WVVGRGNrUTdXVUZEUkN4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRGJrTXNUVUZCVFN4SlFVRkpMRzFDUVVGUkxFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRoUVVNMVJEdFpRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJiMFFzYVVKQlFXbENMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE0wY3NRMEZCUXp0TFFVRkJPMGxCUlVRN096dFBRVWRITzBsQlExVXNUMEZCVHpzN1dVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRjFRaXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRMUVVGQk8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTlZMR2RDUVVGblFpeERRVUZETEU5QlFXbERPenRaUVVNelJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzJkQ1FVTXZRaXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzJGQlEzSkVPMWxCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6RkVMRTFCUVUwc1kwRkJZeXhIUVVGSExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU01UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGNFUXNUVUZCVFN4alFVRmpMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRemxFTEVsQlFVa3NXVUZCV1N4SlFVRkpMR05CUVdNc1NVRkJTU3hUUVVGVExFbEJRVWtzWTBGQll5eEZRVUZGTzJkQ1FVTXZSQ3hOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4dFJVRkJiVVVzUTBGQlF5eERRVUZETzJGQlF6TkdPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZ6UkN4clFrRkJhMElzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTVSeXhEUVVGRE8wdEJRVUU3U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5WTEZOQlFWTXNRMEZCUXl4UFFVRXdRanM3V1VGRE4wTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRMMElzVFVGQlRTeEpRVUZKTEcxQ1FVRlJMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0aFFVTnlSRHRaUVVORUxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTnlReXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzJGQlF6bEVPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUYzUXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGVrWXNRMEZCUXp0TFFVRkJPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMVVzYTBKQlFXdENMRU5CUVVNc1QwRkJiVU03TzFsQlF5OUVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owSkJReTlDTEUxQlFVMHNTVUZCU1N4dFFrRkJVU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRMRU5CUVVNN1lVRkRja1E3V1VGRFJDeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0blFrRkRNME1zVFVGQlRTeEpRVUZKTEcxQ1FVRlJMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0aFFVTndSVHRaUVVORUxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTnVReXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzJGQlF6VkVPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUV3UkN4dlFrRkJiMElzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTndTQ3hEUVVGRE8wdEJRVUU3U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTFVc1YwRkJWeXhEUVVGRExFOUJRVFJDT3p0WlFVTnFSQ3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU12UWl4TlFVRk5MRWxCUVVrc2JVSkJRVkVzUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8yRkJRM0pFTzFsQlEwUXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1owSkJRM2hETEUxQlFVMHNTVUZCU1N4dFFrRkJVU3hEUVVGRExIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1lVRkRha1U3V1VGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMmRDUVVNMVF5eE5RVUZOTEVsQlFVa3NiVUpCUVZFc1EwRkJReXc0UTBGQk9FTXNRMEZCUXl4RFFVRkRPMkZCUTNSRk8xbEJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRTBReXhoUVVGaExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETDBZc1EwRkJRenRMUVVGQk8wbEJSVVE3T3pzN096dFBRVTFITzBsQlExVXNkMEpCUVhkQ0xFTkJRVU1zVDBGQmVVTTdPMWxCUXpORkxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlF5OUNMRTFCUVUwc1NVRkJTU3h0UWtGQlVTeERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU03WVVGRGNrUTdXVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU40UXl4TlFVRk5MRWxCUVVrc2JVSkJRVkVzUTBGQlF5d3dRMEZCTUVNc1EwRkJReXhEUVVGRE8yRkJRMnhGTzFsQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3WjBKQlEzSkdMRTFCUVUwc1NVRkJTU3h0UWtGQlVTeERRVUZETEd0RVFVRnJSQ3hEUVVGRExFTkJRVU03WVVGRE1VVTdXVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTjBSaXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzJGQlEzSkZPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZ6UlN3d1FrRkJNRUlzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjBTU3hEUVVGRE8wdEJRVUU3U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEVlN4alFVRmpMRU5CUVVNc1QwRkJLMEk3TzFsQlEzWkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owSkJReTlDTEUxQlFVMHNTVUZCU1N4dFFrRkJVU3hEUVVGRExEWkNRVUUyUWl4RFFVRkRMRU5CUVVNN1lVRkRja1E3V1VGRFJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4TlFVRk5MRWxCUVVrc2JVSkJRVkVzUTBGQlF5eG5SRUZCWjBRc1EwRkJReXhEUVVGRE8yRkJRM2hGTzFsQlEwUXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUlVGQlJUdG5Ra0ZEYWtRc1RVRkJUU3hKUVVGSkxHMUNRVUZSTEVOQlFVTXNhVVJCUVdsRUxFTkJRVU1zUTBGQlF6dGhRVU42UlR0WlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSVUZCUlR0blFrRkRja1FzVFVGQlRTeEpRVUZKTEcxQ1FVRlJMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0aFFVTXZSVHRaUVVORUxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTnlReXhOUVVGTkxFbEJRVWtzYlVKQlFWRXNRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzJGQlF6bEVPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZyUkN4blFrRkJaMElzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjRSeXhEUVVGRE8wdEJRVUU3U1VGRlJEczdPMDlCUjBjN1NVRkRWU3d3UWtGQk1FSTdPMWxCUTI1RExFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCYzBJc05FSkJRVFJDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRia1lzUTBGQlF6dExRVUZCTzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5WTEhGQ1FVRnhRaXhEUVVGRExFOUJRWE5ET3p0WlFVTnlSU3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU12UWl4TlFVRk5MRWxCUVVrc2JVSkJRVkVzUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8yRkJRM0pFTzFsQlEwUXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1owSkJRM0pETEUxQlFVMHNTVUZCU1N4dFFrRkJVU3hEUVVGRExITkRRVUZ6UXl4RFFVRkRMRU5CUVVNN1lVRkRPVVE3V1VGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVdsRUxIVkNRVUYxUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRemxITEVOQlFVTTdTMEZCUVR0SlFVVkVPenM3TzA5QlNVYzdTVUZEVlN4cFFrRkJhVUlzUTBGQlF5eFBRVUZyUXpzN1dVRkROMFFzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdG5Ra0ZETDBJc1RVRkJUU3hKUVVGSkxHMUNRVUZSTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dGhRVU55UkR0WlFVTkVMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8yZENRVU55UXl4TlFVRk5MRWxCUVVrc2JVSkJRVkVzUTBGQlF5eHpRMEZCYzBNc1EwRkJReXhEUVVGRE8yRkJRemxFTzFsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVFMlF5eHRRa0ZCYlVJc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU4wUnl4RFFVRkRPMHRCUVVFN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTFVc2MwSkJRWE5DT3p0WlFVTXZRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFYTkRMSGRDUVVGM1FpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5R0xFTkJRVU03UzBGQlFUdEpRVVZFT3pzN08wOUJTVWM3U1VGRFZTeG5Ra0ZCWjBJc1EwRkJReXhQUVVGcFF6czdXVUZETTBRc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGREwwSXNUVUZCVFN4SlFVRkpMRzFDUVVGUkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRoUVVOeVJEdFpRVU5FTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOd1F5eE5RVUZOTEVsQlFVa3NiVUpCUVZFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMkZCUXpkRU8xbEJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRnpSQ3hyUWtGQmEwSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNNVJ5eERRVUZETzB0QlFVRTdTVUZGUkRzN096dFBRVWxITzBsQlExVXNjMEpCUVhOQ0xFTkJRVU1zVDBGQmRVTTdPMWxCUTNaRkxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlF5OUNMRTFCUVUwc1NVRkJTU3h0UWtGQlVTeERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU03WVVGRGNrUTdXVUZEUkN4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRGVFTXNUVUZCVFN4SlFVRkpMRzFDUVVGUkxFTkJRVU1zZVVOQlFYbERMRU5CUVVNc1EwRkJRenRoUVVOcVJUdFpRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJhMFVzZDBKQlFYZENMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFFa3NRMEZCUXp0TFFVRkJPMGxCUlVRc1pVRkJaVHRKUVVORUxGZEJRVmNzUTBGQkswSXNUMEZCWlN4RlFVRkZMRTlCUVZVN08xbEJReTlGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4UFFVRlBMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU42UkN4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVTdaMEpCUTNSRExFdEJRVXNzUlVGQlJTeFBRVUZQTzJkQ1FVTmtMRlZCUVZVc1JVRkJSU3hKUVVGSk8yRkJRMjVDTEVOQlFVTXNRMEZCUXp0WlFVTklMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVOQlFVOHNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdhVUpCUXpsRkxFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZPMmRDUVVObUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1QwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUXk5RExFOUJRVThzVVVGQlVTeERRVUZETzFsQlEzQkNMRU5CUVVNc1EwRkJRenRwUWtGRFJDeExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRmhMRVZCUVVVc1JVRkJSVHRuUWtGRGNrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeFBRVUZQTEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGFrUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RlFVRkZPMjlDUVVOb1JDeEpRVUZKTzNkQ1FVTkJMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dDNRa0ZETVVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGT3pSQ1FVTm9RaXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRPelJDUVVOd1F5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzNsQ1FVTTFRenMyUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVN05FSkJRek5DTEU5QlFVOHNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGaExFTkJRVU03TkVKQlEzQkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN2VVSkJRMmhFTzNGQ1FVTktPMjlDUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzNGQ1FVTllPMmxDUVVOS08yZENRVU5FTEUxQlFVMHNSMEZCUnl4RFFVRkRPMWxCUTJRc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFdDeERRVUZETzB0QlFVRTdTVUZGUkN4bFFVRmxPMGxCUTFBc1lVRkJZVHRSUVVOcVFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUXpsRExFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYWtRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0RFFVTktPMEZCZWxWRUxEaENRWGxWUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQW4gYXBpIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXBpRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQVBJXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcGlFcnJvciA9IEFwaUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJwUlhKeWIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpYSnliM0l2WVhCcFJYSnliM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlGUVVGcFJUdEJRVVZxUlRzN1IwRkZSenRCUVVOSUxFMUJRV0VzVVVGQlV5eFRRVUZSTEhGQ1FVRlRPMGxCUTI1RE96czdPenRQUVV0SE8wbEJRMGdzV1VGQldTeFBRVUZsTEVWQlFVVXNWVUZCYTBNc1JVRkJSU3hWUVVGclFqdFJRVU12UlN4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wTkJRMG83UVVGWVJDdzBRa0ZYUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsaWVudC9hcGlDbGllbnRcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci9hcGlFcnJvclwiKSwgZXhwb3J0cyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTERaRVFVRnRRenRCUVVOdVF5d3lSRUZCYVVNaWZRPT0iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9jb3JlRXJyb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9sb2dnZXJzX251bGxMb2dnZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9