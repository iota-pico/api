/**
 * Tests for NodeClient.
 */
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import * as chai from "chai";
import { NodeClient } from "../../src/client/nodeClient";

describe("DefaultNodeClient", () => {
    let networkClientStub: INetworkClient;

    beforeEach(() => {
        networkClientStub = <INetworkClient>{};
    });

    it("can be created", () => {
        const obj = new NodeClient(networkClientStub, "1");
        chai.should().exist(obj);
    });
});
