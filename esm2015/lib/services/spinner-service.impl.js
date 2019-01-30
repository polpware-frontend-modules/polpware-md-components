/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PolpMdIndicatorModal as IndicatorModal } from '../indicator/modal.component';
/** @type {?} */
const DismissingDelayPeroid = 300;
/** @type {?} */
const DefaultShowingDelayPeroid = 500;
export class PolpMdSpinnerServiceImpl {
    /**
     * @param {?} _dialog
     */
    constructor(_dialog) {
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
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    show(title = 'Loading ...') {
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
        this._showingTimer = setTimeout(() => {
            // Clean up the timer
            this._showingTimer = null;
            this._diaglogRef = this._dialog.open(IndicatorModal, {
                width: '250px',
                data: {
                    title: title
                }
            });
        }, this._showingDelay);
    }
    /**
     * @return {?}
     */
    hide() {
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
            this._dismissingTimer = setTimeout(() => {
                // Clean up the timer
                this._dismissingTimer = null;
                // Dismiss the dialog
                if (this._diaglogRef) {
                    this._diaglogRef.close();
                    this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._diaglogRef) {
            this._dismissingTimer = setTimeout(() => {
                // Dismiss the dialog
                if (this._diaglogRef) {
                    this._diaglogRef.close();
                    this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
        }
    }
}
PolpMdSpinnerServiceImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PolpMdSpinnerServiceImpl.ctorParameters = () => [
    { type: MatDialog }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLG1CQUFtQixDQUFDO0FBTTVELE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7TUFFaEYscUJBQXFCLEdBQUcsR0FBRzs7TUFDM0IseUJBQXlCLEdBQUcsR0FBRztBQUdyQyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBVWpDLFlBQW9CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUdNLElBQUksQ0FBQyxRQUFnQixhQUFhO1FBRXJDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBRWxCLGdEQUFnRDtZQUNoRCw0REFBNEQ7WUFDNUQsc0NBQXNDO1lBQ3RDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxPQUFPO1NBQ1Y7UUFFRCx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFFRCw0REFBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFFRCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2pDLHFCQUFxQjtZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDakQsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxLQUFLO2lCQUNmO2FBQ0osQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUzQixDQUFDOzs7O0lBRU0sSUFBSTtRQUVQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFFRCw0Q0FBNEM7UUFDNUMsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDcEMscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUU3QixxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQzNCO1lBQ0wsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFFMUIsT0FBTztTQUNWO1FBRUQsa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFcEMscUJBQXFCO2dCQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjtZQUNMLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzs7O1lBckhKLFVBQVU7Ozs7WUFYRixTQUFTOzs7Ozs7O0lBY2QsK0NBQWtEOzs7OztJQUVsRCxpREFBMkI7Ozs7O0lBQzNCLGlEQUE4Qjs7Ozs7SUFDOUIsb0RBQThCOzs7OztJQUU5Qiw0Q0FBeUI7Ozs7O0lBRWIsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7XG4gICAgSVNwaW5uZXJTZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtc3Bpbm5lcic7XG5cbmltcG9ydCB7IFBvbHBNZEluZGljYXRvck1vZGFsIGFzIEluZGljYXRvck1vZGFsIH0gZnJvbSAnLi4vaW5kaWNhdG9yL21vZGFsLmNvbXBvbmVudCc7XG5cbmNvbnN0IERpc21pc3NpbmdEZWxheVBlcm9pZCA9IDMwMDtcbmNvbnN0IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQgPSA1MDA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2xwTWRTcGlubmVyU2VydmljZUltcGwgaW1wbGVtZW50cyBJU3Bpbm5lclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfZGlhZ2xvZ1JlZjogTWF0RGlhbG9nUmVmPEluZGljYXRvck1vZGFsPjtcblxuICAgIHByaXZhdGUgX3Nob3dpbmdUaW1lcjogYW55O1xuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rpc21pc3NpbmdUaW1lcjogYW55O1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZDtcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGlhZ2xvZ1JlZiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWxheShzZWNvbmRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gc2Vjb25kcyAqIDEwMDA7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBwdWJsaWMgc2hvdyh0aXRsZTogc3RyaW5nID0gJ0xvYWRpbmcgLi4uJykge1xuXG4gICAgICAgIHRoaXMuX2NvdW50ZXIrKztcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxuICAgICAgICBpZiAodGhpcy5fZGlhZ2xvZ1JlZikge1xuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXG4gICAgICAgIC8vIFBsZWFzZSByZWZlciB0byB0aGUgYWJvdmUgZm9yIHRoZSByZWFzb24uXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdyB0aGUgc3Bpbm5lciwgd2UganVzdFxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5fZGlhZ2xvZ1JlZiA9IHRoaXMuX2RpYWxvZy5vcGVuKEluZGljYXRvck1vZGFsLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG5cbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHJlbmRlcmVkLlxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAvLyB3ZSBiZXR0ZXIgd2Ugc2NoZWR1bGUgYWdhaW4uXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIGRpYWxvZ1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaWFnbG9nUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RpYWdsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlhZ2xvZ1JlZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuICAgICAgICBpZiAodGhpcy5fZGlhZ2xvZ1JlZikge1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBkaWFsb2dcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlhZ2xvZ1JlZikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RpYWdsb2dSZWYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==