"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Default implementation of a provider which will supply a INodeConfig.
 * @interface
 */
class DefaultNodeConfigProvider {
    /**
     * Create an instance of DefaultNodeConfigProvider.
     * @param nodeConfig The node config to provide.
     */
    constructor(nodeConfig) {
        if (nodeConfig === undefined || nodeConfig === null) {
            throw new coreError_1.CoreError("The node config must be defined");
        }
        this._nodeConfig = nodeConfig;
    }
    /**
     * Get a node configuration asynchronously.
     * @returns A node configuration.
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this._nodeConfig);
        });
    }
}
exports.DefaultNodeConfigProvider = DefaultNodeConfigProvider;
