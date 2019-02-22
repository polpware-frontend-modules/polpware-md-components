/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
export function IMessageFormInput() { }
if (false) {
    /** @type {?} */
    IMessageFormInput.prototype.title;
    /** @type {?} */
    IMessageFormInput.prototype.message;
}
/**
 * @record
 */
export function IMessageFormExport() { }
if (false) {
    /** @type {?} */
    IMessageFormExport.prototype.message;
}
var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.title && (this.title = data.title);
        this.messageBody = data.message || '';
    }
    Object.defineProperty(MessageFormComponent.prototype, "isSubmitDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.messageBody;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MessageFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MessageFormComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close({
            message: ''
        });
    };
    /**
     * @return {?}
     */
    MessageFormComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close({
            message: this.messageBody
        });
    };
    MessageFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-message-form',
                    template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n        <div class=\"flex-box flex-column margin-bottom-15\">\n            <div class=\"full-width margin-top-10\">\n                <textarea name=\"messageBodyInput\"\n                          class=\"full-width\"\n                          #emailBody\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\n                          placeholder=\"Type your personal message here\"\n                          [(ngModel)]=\"messageBody\">\n                </textarea>\n            </div>\n\n        </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button (click)=\"close()\">No Thanks</button>\n    <button mat-flat-button\n            color=\"primary\"\n            [disabled]=\"isSubmitDisabled\"\n            (click)=\"confirm()\">\n        Ok\n    </button>\n</mat-dialog-actions>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MessageFormComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MessageFormComponent;
}());
export { MessageFormComponent };
if (false) {
    /** @type {?} */
    MessageFormComponent.prototype.title;
    /** @type {?} */
    MessageFormComponent.prototype.messageBody;
    /** @type {?} */
    MessageFormComponent.prototype.dialogRef;
    /** @type {?} */
    MessageFormComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UtZm9ybS9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsWUFBWSxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRyx1Q0FHQzs7O0lBRkcsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdwQix3Q0FFQzs7O0lBREcscUNBQWdCOztBQUdwQjtJQVVJLDhCQUFtQixTQUE2QyxFQUM1QixJQUF1QjtRQUR4QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUV2RCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQVcsa0RBQWdCOzs7O1FBQTNCO1lBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFHRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakIsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBR0Qsc0NBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzVCLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXBDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsK2pDQUE0Qzs7aUJBRS9DOzs7O2dCQWZtQixZQUFZO2dEQXNCdkIsTUFBTSxTQUFDLGVBQWU7O0lBMkIvQiwyQkFBQztDQUFBLEFBdENELElBc0NDO1NBakNZLG9CQUFvQjs7O0lBRTdCLHFDQUFxQjs7SUFDckIsMkNBQTJCOztJQUVmLHlDQUFvRDs7SUFDNUQsb0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VGb3JtSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlRm9ybUV4cG9ydCB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtbWQtbWVzc2FnZS1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZUJvZHk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNZXNzYWdlRm9ybUNvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogSU1lc3NhZ2VGb3JtSW5wdXQpIHtcblxuICAgICAgICBkYXRhLnRpdGxlICYmICh0aGlzLnRpdGxlID0gZGF0YS50aXRsZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZUJvZHkgPSBkYXRhLm1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1N1Ym1pdERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMubWVzc2FnZUJvZHk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VCb2R5XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19