/**
 * Tests for ApiClient.
 */
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import * as chai from "chai";
import { ApiClient } from "../../src/client/apiClient";

describe("ApiClient", () => {
    let networkClientStub: INetworkClient;

    beforeEach(() => {
        networkClientStub = <INetworkClient>{};
    });

    it("can be created", () => {
        const obj = new ApiClient(networkClientStub, "1");
        chai.should().exist(obj);
    });
});
