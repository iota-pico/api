/**
 * Tests for ApiClient.
 */
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import * as chai from "chai";
import * as sinon from "sinon";
import { ApiClient } from "../../src/client/apiClient";
import { IAddNeighborsResponse } from "../../src/models/IAddNeighborsResponse";
import { IAttachToTangleResponse } from "../../src/models/IAttachToTangleResponse";
import { ICheckConsistencyResponse } from "../../src/models/ICheckConsistencyResponse";
import { IFindTransactionsResponse } from "../../src/models/IFindTransactionsResponse";
import { IGetBalancesResponse } from "../../src/models/IGetBalancesResponse";
import { IGetInclusionStatesResponse } from "../../src/models/IGetInclusionStatesResponse";
import { IGetMissingTransactionsResponse } from "../../src/models/IGetMissingTransactionsResponse";
import { IGetNeighborsResponse } from "../../src/models/IGetNeighborsResponse";
import { IGetNodeInfoResponse } from "../../src/models/IGetNodeInfoResponse";
import { IGetTipsResponse } from "../../src/models/IGetTipsResponse";
import { IGetTransactionsToApproveResponse } from "../../src/models/IGetTransactionsToApproveResponse";
import { IGetTrytesResponse } from "../../src/models/IGetTrytesResponse";
import { IRemoveNeighborsResponse } from "../../src/models/IRemoveNeighborsResponse";
import { IWereAddressesSpentFromResponse } from "../../src/models/IWereAddressesSpentFromResponse";

describe("ApiClient", () => {
    let networkClientStub: INetworkClient;

    beforeEach(() => {
        networkClientStub = <INetworkClient>{};
    });

    it("can be created", () => {
        const obj = new ApiClient(networkClientStub);
        chai.should().exist(obj);
    });

    it("can fail creation with empty network client", () => {
        chai.expect(() => new ApiClient(undefined, undefined)).to.throw("The networkClient");
    });

    it("can fail creation with empty api version", () => {
        chai.expect(() => new ApiClient(networkClientStub, "")).to.throw("The apiVersion");
    });

    describe("getNodeInfo", () => {
        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetNodeInfoResponse>{
                appName: "myApp",
                appVersion: "1",
                jreAvailableProcessors: 1,
                jreVersion: 2,
                jreFreeMemory: 3,
                jreMaxMemory: 4,
                jreTotalMemory: 5,
                latestMilestone: "AAA",
                latestMilestoneIndex: 6,
                latestSolidSubtangleMilestone: "BBB",
                latestSolidSubtangleMilestoneIndex: 7,
                neighbors: 8,
                packetsQueueSize: 9,
                time: 10,
                tips: 11,
                transactionsToRequest: 12,
                duration: 13
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getNodeInfo()).to.deep.equal({
                appName: "myApp",
                appVersion: "1",
                jreAvailableProcessors: 1,
                jreVersion: 2,
                jreFreeMemory: 3,
                jreMaxMemory: 4,
                jreTotalMemory: 5,
                latestMilestone: "AAA",
                latestMilestoneIndex: 6,
                latestSolidSubtangleMilestone: "BBB",
                latestSolidSubtangleMilestoneIndex: 7,
                neighbors: 8,
                packetsQueueSize: 9,
                time: 10,
                tips: 11,
                transactionsToRequest: 12,
                duration: 13
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getNodeInfo");
        });
    });

    describe("getNeighbors", () => {
        it("can called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetNeighborsResponse>{
                neighbors: [{
                    address: "AAA",
                    numberOfAllTransactions: 1,
                    numberOfInvalidTransactions: 2,
                    numberOfNewTransactions: 3
                }],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getNeighbors()).to.deep.equal({
                neighbors: [{
                    address: "AAA",
                    numberOfAllTransactions: 1,
                    numberOfInvalidTransactions: 2,
                    numberOfNewTransactions: 3
                }],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getNeighbors");
        });
    });

    describe("addNeighbors", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.addNeighbors(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no uris", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.addNeighbors({
                    uris: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.uris");
            }
        });

        it("can fail with empty uris", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.addNeighbors({
                    uris: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.uris");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IAddNeighborsResponse>{
                addedNeighbors: 10,
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.addNeighbors({
                uris: ["udp://1.1.1.1:443"]
            })).to.deep.equal({
                addedNeighbors: 10,
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("addNeighbors");
        });
    });

    describe("removeNeighbors", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.removeNeighbors(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no uris", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.removeNeighbors({
                    uris: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.uris");
            }
        });

        it("can fail with empty uris", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.removeNeighbors({
                    uris: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.uris");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IRemoveNeighborsResponse>{
                removedNeighbors: 10,
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.removeNeighbors({
                uris: ["udp://1.1.1.1:443"]
            })).to.deep.equal({
                removedNeighbors: 10,
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("removeNeighbors");
        });
    });

    describe("getTips", () => {
        it("can called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetTipsResponse>{
                hashes: ["AAA"],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getTips()).to.deep.equal({
                hashes: ["AAA"],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getTips");
        });
    });

    describe("findTransactions", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.findTransactions(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no bundle, addresses, tags or approvees", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.findTransactions({
                });
            } catch (err) {
                chai.expect(err.message).to.contain("bundle, addresses, tags or approvees");
            }
        });

        it("can fail with empty bundle, addresses, tags or approvees", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.findTransactions({
                    bundles: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("bundle, addresses, tags or approvees");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IFindTransactionsResponse>{
                hashes: [
                    "AAA"
                ],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.findTransactions({
                addresses: ["BBBBB"]
            })).to.deep.equal({
                hashes: [
                    "AAA"
                ],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("findTransactions");
        });
    });

    describe("getTrytes", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTrytes(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no hashes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTrytes({
                    hashes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.hashes");
            }
        });

        it("can fail with empty hashes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTrytes({
                    hashes: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.hashes");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetTrytesResponse>{
                trytes: ["AAA"],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getTrytes({
                hashes: ["BBB"]
            })).to.deep.equal({
                trytes: ["AAA"],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getTrytes");
        });
    });

    describe("getInclusionStates", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getInclusionStates(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no transactions", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getInclusionStates({
                    transactions: undefined,
                    tips: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.transactions");
            }
        });

        it("can fail with empty transactions", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getInclusionStates({
                    transactions: [],
                    tips: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.transactions");
            }
        });

        it("can fail with no tips", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getInclusionStates({
                    transactions: ["AAA"],
                    tips: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.tips");
            }
        });

        it("can fail with empty tips", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getInclusionStates({
                    transactions: ["AAA"],
                    tips: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.tips");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetInclusionStatesResponse>{
                states: [true],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getInclusionStates({
                transactions: ["BBB"],
                tips: ["CCC"]
            })).to.deep.equal({
                states: [true],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getInclusionStates");
        });
    });

    describe("getBalances", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getBalances(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no addresses", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getBalances({
                    addresses: undefined,
                    threshold: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.addresses");
            }
        });

        it("can fail with empty addresses", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getBalances({
                    addresses: [],
                    threshold: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.addresses");
            }
        });

        it("can fail with no threshold", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getBalances({
                    addresses: ["AAA"],
                    threshold: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.threshold");
            }
        });

        it("can fail with non numeric threshold", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getBalances({
                    addresses: ["AAA"],
                    threshold: Number.POSITIVE_INFINITY
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.threshold");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetBalancesResponse>{
                balances: ["12345"],
                milestone: "AAA",
                milestoneIndex: 123,
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getBalances({
                addresses: ["BBB"],
                threshold: 100
            })).to.deep.equal({
                balances: ["12345"],
                milestone: "AAA",
                milestoneIndex: 123,
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getBalances");
        });
    });

    describe("getTransactionsToApprove", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTransactionsToApprove(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no depth", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTransactionsToApprove({
                    depth: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.depth");
            }
        });

        it("can fail with non numeric depth", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTransactionsToApprove({
                    depth: Number.POSITIVE_INFINITY
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.depth");
            }
        });

        it("can fail with empty reference string", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTransactionsToApprove({
                    depth: 10,
                    reference: ""
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.reference");
            }
        });

        it("can fail with non numeric numWalks", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.getTransactionsToApprove({
                    depth: 10,
                    numWalks: Number.POSITIVE_INFINITY
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.numWalks");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetTransactionsToApproveResponse>{
                trunkTransaction: "12345",
                branchTransaction: "56789"
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getTransactionsToApprove({
                depth: 10
            })).to.deep.equal({
                trunkTransaction: "12345",
                branchTransaction: "56789"
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getTransactionsToApprove");
        });
    });

    describe("attachToTangle", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no trunkTransaction", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: undefined,
                    branchTransaction: undefined,
                    minWeightMagnitude: undefined,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trunkTransaction");
            }
        });

        it("can fail with empty trunkTransaction", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "",
                    branchTransaction: undefined,
                    minWeightMagnitude: undefined,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trunkTransaction");
            }
        });

        it("can fail with no branchTransaction", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: undefined,
                    minWeightMagnitude: undefined,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.branchTransaction");
            }
        });

        it("can fail with empty branchTransaction", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: "",
                    minWeightMagnitude: undefined,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.branchTransaction");
            }
        });

        it("can fail with no minWeightMagnitude", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: "BBBB",
                    minWeightMagnitude: undefined,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.minWeightMagnitude");
            }
        });

        it("can fail with non integer minWeightMagnitude", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: "BBBB",
                    minWeightMagnitude: Number.POSITIVE_INFINITY,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.minWeightMagnitude");
            }
        });

        it("can fail with no trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: "BBBB",
                    minWeightMagnitude: 10,
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can fail with empty trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.attachToTangle({
                    trunkTransaction: "AAAA",
                    branchTransaction: "BBBB",
                    minWeightMagnitude: 10,
                    trytes: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IAttachToTangleResponse>{
                trytes: ["12345"]
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.attachToTangle({
                trunkTransaction: "AAAA",
                branchTransaction: "BBBB",
                minWeightMagnitude: 10,
                trytes: ["CCCC"]
            })).to.deep.equal({
                trytes: ["12345"]
            });
            chai.expect(mock.args[0][0].command).to.be.equal("attachToTangle");
        });
    });

    describe("interruptAttachingToTangle", () => {
        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves();
            networkClientStub.postJson = mock;

            chai.expect(await obj.interruptAttachingToTangle()).to.deep.equal(undefined);
            chai.expect(mock.args[0][0].command).to.be.equal("interruptAttachingToTangle");
        });
    });

    describe("broadcastTransactions", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.broadcastTransactions(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.broadcastTransactions({
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can fail with empty trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.broadcastTransactions({
                    trytes: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves();
            networkClientStub.postJson = mock;

            chai.expect(await obj.broadcastTransactions({
                trytes: ["CCCC"]
            })).to.deep.equal(undefined);
            chai.expect(mock.args[0][0].command).to.be.equal("broadcastTransactions");
        });
    });

    describe("storeTransactions", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.storeTransactions(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.storeTransactions({
                    trytes: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can fail with empty trytes", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.storeTransactions({
                    trytes: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.trytes");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves();
            networkClientStub.postJson = mock;

            chai.expect(await obj.storeTransactions({
                trytes: ["CCCC"]
            })).to.deep.equal(undefined);
            chai.expect(mock.args[0][0].command).to.be.equal("storeTransactions");
        });
    });

    describe("getMissingTransactions", () => {
        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IGetMissingTransactionsResponse>{
                hashes: ["CCCC"],
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.getMissingTransactions()).to.deep.equal({
                hashes: ["CCCC"],
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("getMissingTransactions");
        });
    });

    describe("checkConsistency", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.checkConsistency(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no tails", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.checkConsistency({
                    tails: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.tails");
            }
        });

        it("can fail with empty tails", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.checkConsistency({
                    tails: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.tails");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<ICheckConsistencyResponse>{
                state: true,
                info: "Blah",
                duration: 1
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.checkConsistency({
                tails: ["CCCC"]
            })).to.deep.equal({
                state: true,
                info: "Blah",
                duration: 1
            });
            chai.expect(mock.args[0][0].command).to.be.equal("checkConsistency");
        });
    });

    describe("wereAddressesSpentFrom", () => {
        it("can fail with no request object", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.wereAddressesSpentFrom(undefined);
            } catch (err) {
                chai.expect(err.message).to.contain("The request");
            }
        });

        it("can fail with no addresses", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.wereAddressesSpentFrom({
                    addresses: undefined
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.addresses");
            }
        });

        it("can fail with empty addresses", async () => {
            const obj = new ApiClient(networkClientStub);

            try {
                await obj.wereAddressesSpentFrom({
                    addresses: []
                });
            } catch (err) {
                chai.expect(err.message).to.contain("The request.addresses");
            }
        });

        it("can be called", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().resolves(<IWereAddressesSpentFromResponse>{
                states: [true]
            });
            networkClientStub.postJson = mock;

            chai.expect(await obj.wereAddressesSpentFrom({
                addresses: ["CCCC"]
            })).to.deep.equal({
                states: [true]
            });
            chai.expect(mock.args[0][0].command).to.be.equal("wereAddressesSpentFrom");
        });
    });

    describe("sendCommand", () => {
        it("can fail with no additional information", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().rejects(new Error("blah"));
            networkClientStub.postJson = mock;
            try {
                await obj.getNodeInfo();
            } catch (err) {
                chai.expect(err.message).to.contain("blah");
            }
        });

        it("can fail with additional information that fails to parse", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().rejects({
                message: "blah",
                additional: {
                    response: "kjhkjhkj"
                }
            });
            networkClientStub.postJson = mock;
            try {
                await obj.getNodeInfo();
            } catch (err) {
                chai.expect(err.message).to.contain("blah");
            }
        });

        it("can fail with additional error information", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().rejects({
                message: "blah",
                additional: {
                    errorResponse: JSON.stringify({ error: "foo" })
                }
            });
            networkClientStub.postJson = mock;
            try {
                await obj.getNodeInfo();
            } catch (err) {
                chai.expect(err.message).to.contain("blah");
                chai.expect(err.additional.apiError).to.contain("foo");
            }
        });

        it("can fail with additional exception information", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().rejects({
                message: "blah",
                additional: {
                    errorResponse: JSON.stringify({ exception: "foo" })
                }
            });
            networkClientStub.postJson = mock;
            try {
                await obj.getNodeInfo();
            } catch (err) {
                chai.expect(err.message).to.contain("blah");
                chai.expect(err.additional.apiError).to.contain("foo");
            }
        });

        it("can fail with additional other information", async () => {
            const obj = new ApiClient(networkClientStub);
            const mock = sinon.mock().rejects({
                message: "blah",
                additional: {
                    errorResponse: JSON.stringify({ other: "foo" })
                }
            });
            networkClientStub.postJson = mock;
            try {
                await obj.getNodeInfo();
            } catch (err) {
                chai.expect(err.message).to.contain("blah");
                chai.expect(err.additional.errorResponse).to.contain(JSON.stringify({ other: "foo" }));
            }
        });
    });
});
