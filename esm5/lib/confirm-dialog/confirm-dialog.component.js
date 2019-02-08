/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
export function IConfirmDialogData() { }
if (false) {
    /** @type {?} */
    IConfirmDialogData.prototype.title;
    /** @type {?} */
    IConfirmDialogData.prototype.message;
}
var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ConfirmDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-confirm-dialog',
                    template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    {{data.message}}\n</div>\n<mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" color=\"primary\">No</button>\n    <button mat-button [mat-dialog-close]=\"true\" color=\"warn\">Yes</button>\n</mat-dialog-actions>`,\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ConfirmDialogComponent;
}());
export { ConfirmDialogComponent };
if (false) {
    /** @type {?} */
    ConfirmDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFL0Qsd0NBR0M7OztJQUZHLG1DQUFjOztJQUNkLHFDQUFnQjs7QUFHcEI7SUFPSSxnQ0FBNEMsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7SUFBSSxDQUFDOzs7O0lBRXpFLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQVZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixnVUFBOEM7O2lCQUVqRDs7OztnREFHZ0IsTUFBTSxTQUFDLGVBQWU7O0lBS3ZDLDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksc0JBQXNCOzs7SUFFbkIsc0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1EaWFsb2dEYXRhIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWNvbmZpcm0tZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IElDb25maXJtRGlhbG9nRGF0YSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbn1cbiJdfQ==