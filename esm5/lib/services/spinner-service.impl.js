/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PolpMdIndicatorModal as IndicatorModal } from '../indicator/modal.component';
/** @type {?} */
var DismissingDelayPeroid = 300;
/** @type {?} */
var DefaultShowingDelayPeroid = 500;
var PolpMdSpinnerServiceImpl = /** @class */ (function () {
    function PolpMdSpinnerServiceImpl(_dialog) {
        this._dialog = _dialog;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._diaglogRef = null;
        this._counter = 0;
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    PolpMdSpinnerServiceImpl.prototype.setDelay = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    // Override
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    PolpMdSpinnerServiceImpl.prototype.show = 
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
        this._counter++;
        // If there is one already, use it.
        if (this._diaglogRef) {
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
            return;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(function () {
            // Clean up the timer
            _this._showingTimer = null;
            _this._diaglogRef = _this._dialog.open(IndicatorModal, {
                width: '250px',
                data: {
                    title: title
                }
            });
        }, this._showingDelay);
    };
    /**
     * @return {?}
     */
    PolpMdSpinnerServiceImpl.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._counter--;
        if (this._counter > 0) {
            return;
        }
        // If the spinner has not been rendered.
        if (this._showingTimer) {
            clearTimeout(this._showingTimer);
            this._showingTimer = null;
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                // Clean up the timer
                _this._dismissingTimer = null;
                // Dismiss the dialog
                if (_this._diaglogRef) {
                    _this._diaglogRef.close();
                    _this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._diaglogRef) {
            this._dismissingTimer = setTimeout(function () {
                // Dismiss the dialog
                if (_this._diaglogRef) {
                    _this._diaglogRef.close();
                    _this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
        }
    };
    PolpMdSpinnerServiceImpl.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PolpMdSpinnerServiceImpl.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return PolpMdSpinnerServiceImpl;
}());
export { PolpMdSpinnerServiceImpl };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._diaglogRef;
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._showingTimer;
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._showingDelay;
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._dismissingTimer;
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._counter;
    /**
     * @type {?}
     * @private
     */
    PolpMdSpinnerServiceImpl.prototype._dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLG1CQUFtQixDQUFDO0FBTTVELE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFaEYscUJBQXFCLEdBQUcsR0FBRzs7SUFDM0IseUJBQXlCLEdBQUcsR0FBRztBQUVyQztJQVdJLGtDQUFvQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVNLDJDQUFROzs7O0lBQWYsVUFBZ0IsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7Ozs7OztJQUNKLHVDQUFJOzs7Ozs7SUFBWCxVQUFZLEtBQTZCO1FBQXpDLGlCQStDQztRQS9DVyxzQkFBQSxFQUFBLHFCQUE2QjtRQUVyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUVsQixnREFBZ0Q7WUFDaEQsNERBQTREO1lBQzVELHNDQUFzQztZQUN0QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1lBRUQsT0FBTztTQUNWO1FBRUQsdURBQXVEO1FBQ3ZELHVDQUF1QztRQUN2Qyw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsT0FBTztTQUNWO1FBRUQsNERBQTREO1FBQzVELHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBRUQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1lBQzVCLHFCQUFxQjtZQUNyQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDakQsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxLQUFLO2lCQUNmO2FBQ0osQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUzQixDQUFDOzs7O0lBRU0sdUNBQUk7OztJQUFYO1FBQUEsaUJBNENDO1FBMUNHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFFRCw0Q0FBNEM7UUFDNUMsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUMvQixxQkFBcUI7Z0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBRTdCLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDM0I7WUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBRS9CLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDM0I7WUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7O2dCQXJISixVQUFVOzs7O2dCQVhGLFNBQVM7O0lBaUlsQiwrQkFBQztDQUFBLEFBdEhELElBc0hDO1NBckhZLHdCQUF3Qjs7Ozs7O0lBRWpDLCtDQUFrRDs7Ozs7SUFFbEQsaURBQTJCOzs7OztJQUMzQixpREFBOEI7Ozs7O0lBQzlCLG9EQUE4Qjs7Ozs7SUFFOUIsNENBQXlCOzs7OztJQUViLDJDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQge1xuICAgIElTcGlubmVyU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LXNwaW5uZXInO1xuXG5pbXBvcnQgeyBQb2xwTWRJbmRpY2F0b3JNb2RhbCBhcyBJbmRpY2F0b3JNb2RhbCB9IGZyb20gJy4uL2luZGljYXRvci9tb2RhbC5jb21wb25lbnQnO1xuXG5jb25zdCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQgPSAzMDA7XG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2RpYWdsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbmRpY2F0b3JNb2RhbD47XG5cbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcbiAgICBwcml2YXRlIF9zaG93aW5nRGVsYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nVGltZXI6IGFueTtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RpYWdsb2dSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IHNlY29uZHMgKiAxMDAwO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgcHVibGljIHNob3codGl0bGU6IHN0cmluZyA9ICdMb2FkaW5nIC4uLicpIHtcblxuICAgICAgICB0aGlzLl9jb3VudGVyKys7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lIGFscmVhZHksIHVzZSBpdC5cbiAgICAgICAgaWYgKHRoaXMuX2RpYWdsb2dSZWYpIHtcblxuICAgICAgICAgICAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBjYW5jZWwgdGhlIGRpc21pc3MgdGltZXIuXG4gICAgICAgICAgICAvLyBJdCBpcyBzYWZlLCBiZWNhdXNlIHdlIGV4cGVjdCB0aGF0IFwiaGlkZVwiIGlzIHRvIGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXG4gICAgICAgIC8vIHdlIGp1c3QgbmVlZCB0byBjbGVhciB0aGUgc2NoZWR1bGVyLlxuICAgICAgICAvLyBQbGVhc2UgcmVmZXIgdG8gdGhlIGFib3ZlIGZvciB0aGUgcmVhc29uLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuX2RpYWdsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbihJbmRpY2F0b3JNb2RhbCwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuXG4gICAgICAgIHRoaXMuX2NvdW50ZXItLTtcblxuICAgICAgICBpZiAodGhpcy5fY291bnRlciA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBzcGlubmVyIGhhcyBub3QgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBkaWFsb2dcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlhZ2xvZ1JlZikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RpYWdsb2dSZWYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcbiAgICAgICAgaWYgKHRoaXMuX2RpYWdsb2dSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgZGlhbG9nXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpYWdsb2dSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlhZ2xvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbG9nUmVmID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=