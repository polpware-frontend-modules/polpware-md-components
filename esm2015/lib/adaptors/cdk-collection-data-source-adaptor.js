/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TableDataSourceAdaptor extends DataSource {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        super();
        this._database = _database;
        this._filterChange = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    get filter() { return this._filterChange.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filterChange.next(filter); }
    /**
     * @return {?}
     */
    connect() {
        return this._database.dataChange.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNvbGxlY3Rpb24tZGF0YS1zb3VyY2UtYWRhcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2FkYXB0b3JzL2Nkay1jb2xsZWN0aW9uLWRhdGEtc291cmNlLWFkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFckQsdUJBRUM7OztJQURHLDhCQUFxQzs7Ozs7QUFHekMsTUFBTSxPQUFPLHNCQUEwQixTQUFRLFVBQWE7Ozs7SUFJeEQsWUFBK0IsU0FBc0I7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEbUIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUVqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxJQUFJLE1BQU0sS0FBYSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDekQsSUFBSSxNQUFNLENBQUMsTUFBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztJQUUvRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsVUFBVTtJQUNWLENBQUM7Q0FDSjs7Ozs7O0lBaEJHLCtDQUEwRDs7Ozs7SUFFOUMsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgRGF0YWJhc2U8VD4ge1xuICAgIGRhdGFDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUPj5cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVNvdXJjZUFkYXB0b3I8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IHtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBfZmlsdGVyQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBfZGF0YWJhc2U6IERhdGFiYXNlPFQ+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2ZpbHRlckNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2ZpbHRlckNoYW5nZS52YWx1ZTsgfVxuICAgIHNldCBmaWx0ZXIoZmlsdGVyOiBzdHJpbmcpIHsgdGhpcy5fZmlsdGVyQ2hhbmdlLm5leHQoZmlsdGVyKTsgfVxuXG4gICAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPEFycmF5PFQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZS5kYXRhQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgfVxufVxuXG4iXX0=