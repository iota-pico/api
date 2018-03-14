Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IvYXBpRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUVqRTs7R0FFRztBQUNILGNBQXNCLFNBQVEscUJBQVM7SUFDbkM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQVhELDRCQVdDIn0=