/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var PolpMdIndicatorModal = /** @class */ (function () {
    function PolpMdIndicatorModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title || '';
    }
    /**
     * @return {?}
     */
    PolpMdIndicatorModal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    PolpMdIndicatorModal.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-indicator-modal',
                    template: "<div class=\"full-width flex-box flex-column align-items-center\">\r\n  <mat-spinner>\r\n  </mat-spinner>\r\n  <h3>{{title}}</h3>\r\n</div>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    PolpMdIndicatorModal.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return PolpMdIndicatorModal;
}());
export { PolpMdIndicatorModal };
if (false) {
    /** @type {?} */
    PolpMdIndicatorModal.prototype.title;
    /** @type {?} */
    PolpMdIndicatorModal.prototype.dialogRef;
    /** @type {?} */
    PolpMdIndicatorModal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvaW5kaWNhdG9yL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFhLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RTtJQVFJLDhCQUNXLFNBQTZDLEVBQ3BCLElBQVM7UUFEbEMsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWhCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsK0pBQW1DO2lCQUN0Qzs7OztnQkFObUIsWUFBWTtnREFhdkIsTUFBTSxTQUFDLGVBQWU7O0lBTy9CLDJCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FiWSxvQkFBb0I7OztJQUU3QixxQ0FBcUI7O0lBR2pCLHlDQUFvRDs7SUFDcEQsb0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9scC1tZC1pbmRpY2F0b3ItbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtb2RhbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvbHBNZEluZGljYXRvck1vZGFsIHtcclxuXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UG9scE1kSW5kaWNhdG9yTW9kYWw+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19