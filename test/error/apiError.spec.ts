/**
 * Tests for ApiError.
 */
import * as chai from "chai";
import { ApiError } from "../../src/error/apiError";

describe("ApiError", () => {
    it("can be created", () => {
        const obj = new ApiError("message");
        chai.should().exist(obj);
    });
});
