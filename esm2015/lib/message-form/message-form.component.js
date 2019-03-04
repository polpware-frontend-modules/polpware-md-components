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
    IMessageFormExport.prototype.confirmed;
    /** @type {?} */
    IMessageFormExport.prototype.message;
}
export class MessageFormComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.title && (this.title = data.title);
        this.messageBody = data.message || '';
    }
    /**
     * @return {?}
     */
    get isSubmitDisabled() {
        return !this.messageBody;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close({
            confirmed: false,
            message: ''
        });
    }
    /**
     * @return {?}
     */
    confirm() {
        this.dialogRef.close({
            confirmed: true,
            message: this.messageBody || ''
        });
    }
}
MessageFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-md-message-form',
                template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n        <div class=\"flex-box flex-column margin-bottom-15\">\n            <div class=\"full-width margin-top-10\">\n                <textarea name=\"messageBodyInput\"\n                          class=\"full-width\"\n                          #emailBody\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\n                          placeholder=\"Type your personal message or leave it empty\"\n                          [(ngModel)]=\"messageBody\">\n                </textarea>\n            </div>\n\n        </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-flat-button\n            color=\"primary\"\n            [disabled]=\"isSubmitDisabled\"\n            (click)=\"confirm()\">\n        Ok\n    </button>\n</mat-dialog-actions>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MessageFormComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UtZm9ybS9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsWUFBWSxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRyx1Q0FHQzs7O0lBRkcsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdwQix3Q0FHQzs7O0lBRkcsdUNBQW1COztJQUNuQixxQ0FBZ0I7O0FBUXBCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBSzdCLFlBQW1CLFNBQTZDLEVBQzVCLElBQXVCO1FBRHhDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBRXZELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QixDQUFDOzs7O0lBR0QsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBR0QsT0FBTztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtTQUNsQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUF0Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHlrQ0FBNEM7O2FBRS9DOzs7O1lBaEJtQixZQUFZOzRDQXVCdkIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKM0IscUNBQXFCOztJQUNyQiwyQ0FBMkI7O0lBRWYseUNBQW9EOztJQUM1RCxvQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZUZvcm1JbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VGb3JtRXhwb3J0IHtcbiAgICBjb25maXJtZWQ6IGJvb2xlYW47XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtbWQtbWVzc2FnZS1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgbWVzc2FnZUJvZHk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNZXNzYWdlRm9ybUNvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogSU1lc3NhZ2VGb3JtSW5wdXQpIHtcblxuICAgICAgICBkYXRhLnRpdGxlICYmICh0aGlzLnRpdGxlID0gZGF0YS50aXRsZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZUJvZHkgPSBkYXRhLm1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1N1Ym1pdERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMubWVzc2FnZUJvZHk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgY29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgY29uZmlybWVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlQm9keSB8fCAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==