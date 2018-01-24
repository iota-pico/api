/**
 * Tests for DefaultNodeConfigProvider.
 */
import * as chai from "chai";
import { DefaultNodeConfig } from "../../src/config/defaultNodeConfig";
import { DefaultNodeConfigProvider } from "../../src/provider/defaultNodeConfigProvider";

describe("DefaultNodeConfigProvider", () => {
    it("can be created", () => {
        const obj = new DefaultNodeConfigProvider(new DefaultNodeConfig("http", "localhost", 14265));
        chai.should().exist(obj);
    });
});
