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
            message: ''
        });
    }
    /**
     * @return {?}
     */
    confirm() {
        this.dialogRef.close({
            message: this.messageBody
        });
    }
}
MessageFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-md-message-form',
                template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            (click)=\"close()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n        <div class=\"flex-box flex-column margin-bottom-15\">\n            <div class=\"full-width margin-top-10\">\n                <textarea name=\"messageBodyInput\"\n                          class=\"full-width\"\n                          #emailBody\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\n                          placeholder=\"Type your personal message here\"\n                          [(ngModel)]=\"messageBody\">\n                </textarea>\n            </div>\n\n        </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button (click)=\"close()\">No Thanks</button>\n    <button mat-flat-button\n            color=\"primary\"\n            [disabled]=\"isSubmitDisabled\"\n            (click)=\"confirm()\">\n        Ok\n    </button>\n</mat-dialog-actions>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UtZm9ybS9tZXNzYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsWUFBWSxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRyx1Q0FHQzs7O0lBRkcsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdwQix3Q0FFQzs7O0lBREcscUNBQWdCOztBQVFwQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUs3QixZQUFtQixTQUE2QyxFQUM1QixJQUF1QjtRQUR4QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUV2RCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0IsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUdELE9BQU87UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDNUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBcENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywrakNBQTRDOzthQUUvQzs7OztZQWZtQixZQUFZOzRDQXNCdkIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKM0IscUNBQXFCOztJQUNyQiwyQ0FBMkI7O0lBRWYseUNBQW9EOztJQUM1RCxvQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZUZvcm1JbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VGb3JtRXhwb3J0IHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1tZC1tZXNzYWdlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21lc3NhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlQm9keTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1lc3NhZ2VGb3JtQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBJTWVzc2FnZUZvcm1JbnB1dCkge1xuXG4gICAgICAgIGRhdGEudGl0bGUgJiYgKHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlQm9keSA9IGRhdGEubWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU3VibWl0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5tZXNzYWdlQm9keTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZUJvZHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=