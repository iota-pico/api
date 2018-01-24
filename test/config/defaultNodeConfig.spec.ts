/**
 * Tests for DefaultNodeConfig.
 */
import * as chai from "chai";
import { DefaultNodeConfig } from "../../src/config/defaultNodeConfig";

describe("DefaultNodeConfig", () => {
    it("can be created", () => {
        const obj = new DefaultNodeConfig("http", "localhost", 14265);
        chai.should().exist(obj);
    });
});
