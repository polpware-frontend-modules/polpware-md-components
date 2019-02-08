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
export class ConfirmDialogComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-confirm-dialog',
                template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    {{data.message}}\n</div>\n<mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" color=\"primary\">No</button>\n    <button mat-button [mat-dialog-close]=\"true\" color=\"warn\">Yes</button>\n</mat-dialog-actions>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ConfirmDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ConfirmDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFL0Qsd0NBR0M7OztJQUZHLG1DQUFjOztJQUNkLHFDQUFnQjs7QUFRcEIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUUvQixZQUE0QyxJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUFJLENBQUM7Ozs7SUFFekUsUUFBUTtJQUNSLENBQUM7OztZQVZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw4VEFBOEM7O2FBRWpEOzs7OzRDQUdnQixNQUFNLFNBQUMsZUFBZTs7OztJQUF2QixzQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybURpYWxvZ0RhdGEge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtY29uZmlybS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogSUNvbmZpcm1EaWFsb2dEYXRhKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIl19