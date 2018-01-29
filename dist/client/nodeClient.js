"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Default implementation of a node client.
 * @interface
 */
class NodeClient {
    /**
     * Create an instance of NodeClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     */
    constructor(networkClient, apiVersion, additionalHeaders) {
        if (networkClient === undefined || networkClient === null) {
            throw new coreError_1.CoreError("The networkClient must be defined");
        }
        if (apiVersion === undefined || apiVersion === null || apiVersion.length === 0) {
            throw new coreError_1.CoreError("The apiVersion must be defined");
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
        return this.sendCommand("addNeighbors", request);
    }
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    async removeNeighbors(request) {
        return this.sendCommand("removeNeighbors", request);
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
        return this.sendCommand("getBalances", request);
    }
    async sendCommand(command, request) {
        Object.defineProperty(request, "command", {
            value: command,
            enumerable: true
        });
        return this._networkClient.postJson(request, this.createHeaders())
            .catch((err) => {
            if (err.additional && err.additional.response) {
                try {
                    const commandError = JSON.parse(err.additional.response);
                    if (commandError.error) {
                        delete err.additional.response;
                        err.additional.commandError = commandError.error;
                    }
                }
                catch (e) {
                }
            }
            throw err;
        });
    }
    createHeaders() {
        const headers = this._additionalHeaders || {};
        headers["X-IOTA-API-Version"] = this._apiVersion;
        return headers;
    }
}
exports.NodeClient = NodeClient;
