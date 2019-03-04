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
            confirmed: false,
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
            confirmed: true,
            message: this.messageBody || ''
        });
    };
    MessageFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-message-form',
                    template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n        <div class=\"flex-box flex-column margin-bottom-15\">\n            <div class=\"full-width margin-top-10\">\n                <textarea name=\"messageBodyInput\"\n                          class=\"full-width\"\n                          #emailBody\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\n                          placeholder=\"Type your personal message or leave it empty\"\n                          [(ngModel)]=\"messageBody\">\n                </textarea>\n            </div>\n\n        </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-flat-button\n            color=\"primary\"\n            (click)=\"confirm()\">\n        Ok\n    </button>\n</mat-dialog-actions>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UtZm9ybS9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsWUFBWSxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRyx1Q0FHQzs7O0lBRkcsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdwQix3Q0FHQzs7O0lBRkcsdUNBQW1COztJQUNuQixxQ0FBZ0I7O0FBR3BCO0lBVUksOEJBQW1CLFNBQTZDLEVBQzVCLElBQXVCO1FBRHhDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBRXZELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQkFBVyxrREFBZ0I7Ozs7UUFBM0I7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7OztJQUdELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFHRCxzQ0FBTzs7O0lBQVA7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7U0FDbEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBdENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw0aENBQTRDOztpQkFFL0M7Ozs7Z0JBaEJtQixZQUFZO2dEQXVCdkIsTUFBTSxTQUFDLGVBQWU7O0lBNkIvQiwyQkFBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLG9CQUFvQjs7O0lBRTdCLHFDQUFxQjs7SUFDckIsMkNBQTJCOztJQUVmLHlDQUFvRDs7SUFDNUQsb0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VGb3JtSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlRm9ybUV4cG9ydCB7XG4gICAgY29uZmlybWVkOiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLW1kLW1lc3NhZ2UtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2VCb2R5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWVzc2FnZUZvcm1Db21wb25lbnQ+LFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IElNZXNzYWdlRm9ybUlucHV0KSB7XG5cbiAgICAgICAgZGF0YS50aXRsZSAmJiAodGhpcy50aXRsZSA9IGRhdGEudGl0bGUpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gZGF0YS5tZXNzYWdlIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTdWJtaXREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm1lc3NhZ2VCb2R5O1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgIGNvbmZpcm1lZDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgIGNvbmZpcm1lZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZUJvZHkgfHwgJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=