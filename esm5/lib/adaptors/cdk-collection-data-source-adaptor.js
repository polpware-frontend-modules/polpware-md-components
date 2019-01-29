/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 * @template T
 */
function Database() { }
if (false) {
    /** @type {?} */
    Database.prototype.dataChange;
}
/**
 * @template T
 */
var /**
 * @template T
 */
TableDataSourceAdaptor = /** @class */ (function (_super) {
    tslib_1.__extends(TableDataSourceAdaptor, _super);
    function TableDataSourceAdaptor(_database) {
        var _this = _super.call(this) || this;
        _this._database = _database;
        _this._filterChange = new BehaviorSubject('');
        return _this;
    }
    Object.defineProperty(TableDataSourceAdaptor.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () { return this._filterChange.value; },
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TableDataSourceAdaptor.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._database.dataChange.asObservable();
    };
    /**
     * @return {?}
     */
    TableDataSourceAdaptor.prototype.disconnect = /**
     * @return {?}
     */
    function () {
    };
    return TableDataSourceAdaptor;
}(DataSource));
/**
 * @template T
 */
export { TableDataSourceAdaptor };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TableDataSourceAdaptor.prototype._filterChange;
    /**
     * @type {?}
     * @protected
     */
    TableDataSourceAdaptor.prototype._database;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNvbGxlY3Rpb24tZGF0YS1zb3VyY2UtYWRhcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2FkYXB0b3JzL2Nkay1jb2xsZWN0aW9uLWRhdGEtc291cmNlLWFkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRXJELHVCQUVDOzs7SUFERyw4QkFBcUM7Ozs7O0FBR3pDOzs7O0lBQStDLGtEQUFhO0lBSXhELGdDQUErQixTQUFzQjtRQUFyRCxZQUNJLGlCQUFPLFNBRVY7UUFIOEIsZUFBUyxHQUFULFNBQVMsQ0FBYTtRQUVqRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQUNqRCxDQUFDO0lBRUQsc0JBQUksMENBQU07Ozs7UUFBVixjQUF1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDekQsVUFBVyxNQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FETjs7OztJQUd6RCx3Q0FBTzs7O0lBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7SUFDQSxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBbEJELENBQStDLFVBQVUsR0FrQnhEOzs7Ozs7Ozs7O0lBaEJHLCtDQUEwRDs7Ozs7SUFFOUMsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgRGF0YWJhc2U8VD4ge1xuICAgIGRhdGFDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUPj5cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVNvdXJjZUFkYXB0b3I8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IHtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBfZmlsdGVyQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBfZGF0YWJhc2U6IERhdGFiYXNlPFQ+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2ZpbHRlckNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2ZpbHRlckNoYW5nZS52YWx1ZTsgfVxuICAgIHNldCBmaWx0ZXIoZmlsdGVyOiBzdHJpbmcpIHsgdGhpcy5fZmlsdGVyQ2hhbmdlLm5leHQoZmlsdGVyKTsgfVxuXG4gICAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPEFycmF5PFQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZS5kYXRhQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgfVxufVxuXG4iXX0=