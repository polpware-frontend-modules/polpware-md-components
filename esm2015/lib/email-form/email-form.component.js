/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as showdown from 'showdown';
import { EmailFormAbstractComponent, parseOnlyEmails } from './email-form-abstract.component';
/**
 * @record
 */
export function IEmailFormDefaultInput() { }
if (false) {
    /** @type {?} */
    IEmailFormDefaultInput.prototype.emailBody;
    /** @type {?} */
    IEmailFormDefaultInput.prototype.emailTitle;
}
/**
 * @record
 */
export function IEmailFormDefaultOutput() { }
if (false) {
    /** @type {?} */
    IEmailFormDefaultOutput.prototype.confirmed;
    /** @type {?} */
    IEmailFormDefaultOutput.prototype.emailReceivers;
    /** @type {?} */
    IEmailFormDefaultOutput.prototype.emailBody;
    /** @type {?} */
    IEmailFormDefaultOutput.prototype.emailTitle;
}
export class EmailFormComponent extends EmailFormAbstractComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        super(dialogRef);
        this.dialogRef = dialogRef;
        this.data = data;
        this.messageBody = data.emailBody || '';
    }
    /**
     * @return {?}
     */
    get isSubmitDisabled() {
        return this.emails.length === 0;
    }
    // Override
    /**
     * @return {?}
     */
    onSubmit() {
        // body
        /** @type {?} */
        let messageBody = this.messageBody;
        // Convert it into html
        /** @type {?} */
        const converter = new showdown.Converter();
        messageBody = converter.makeHtml(messageBody);
        // Prepare email list
        /** @type {?} */
        const emails = [];
        this.emails.forEach(elem => {
            /** @type {?} */
            let x = elem || (elem.value);
            /** @type {?} */
            const y = parseOnlyEmails(x);
            y.forEach(m => {
                emails.push(m);
            });
        });
        /** @type {?} */
        const outputs = {
            confirmed: true,
            emailReceivers: emails,
            emailBody: messageBody,
            emailTitle: this.data.emailTitle || '' // todo:
        };
        this.dialogRef.close(outputs);
    }
}
EmailFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-md-email-form',
                template: "<h2 mat-dialog-title>\r\n    {{title}}\r\n    <button class=\"float-right\"\r\n            mat-icon-button\r\n            tabIndex=\"-1\"\r\n            [mat-dialog-close]=\"true\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n    <form name=\"emailForm\" autocomplete=\"off\">\r\n        <div class=\"flex-box flex-column margin-bottom-15\">\r\n            <tag-input [(ngModel)]=\"emails\" #emailInputBox\r\n                       name=\"emailInputs\"\r\n                       [addOnPaste]=\"true\"\r\n                       [modelAsStrings]=\"true\"\r\n                       [trimTags]=\"true\"\r\n                       [editable]=\"true\"\r\n                       (focusout)=\"onOutOfTagInput($event)\"\r\n                       [errorMessages]=\"errorMessages\"\r\n                       [validators]=\"validators\"\r\n                       [secondaryPlaceholder]=\"'Emails'\"\r\n                       [separatorKeyCodes]=\"[32,44,58,59]\"\r\n                       [placeholder]=\"'More Emails'\">\r\n            </tag-input>\r\n\r\n            <div class=\"full-width\">\r\n                <textarea name=\"messageBody\"\r\n                          matInput\r\n                          #emailBody\r\n                          cdkTextareaAutosize\r\n                          cdkAutosizeMinRows=\"2\"\r\n                          cdkAutosizeMaxRows=\"5\"                      \r\n                          placeholder=\"Type your personal message here\"\r\n                          [(ngModel)]=\"messageBody\">\r\n                </textarea>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button mat-flat-button\r\n            color=\"primary\"\r\n            [disabled]=\"isSubmitDisabled\"\r\n            (click)=\"onSubmit()\">\r\n        Send\r\n    </button>\r\n</mat-dialog-actions>\r\n"
            }] }
];
/** @nocollapse */
EmailFormComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    EmailFormComponent.prototype.dialogRef;
    /** @type {?} */
    EmailFormComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFlBQVksRUFBRSxlQUFlLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFFaEcsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFFckMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRTlGLDRDQUdDOzs7SUFGRywyQ0FBa0I7O0lBQ2xCLDRDQUFtQjs7Ozs7QUFHdkIsNkNBS0M7OztJQUpHLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6Qiw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7QUFPdkIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLDBCQUEwQjs7Ozs7SUFFOUQsWUFBbUIsU0FBMkMsRUFDMUIsSUFBNEI7UUFDNUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRkYsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFHNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFHTSxRQUFROzs7WUFFUCxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7OztjQUc1QixTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1FBQzFDLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Y0FHeEMsTUFBTSxHQUFHLEVBQUU7UUFFakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUNuQixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7a0JBQ3RCLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDOztjQUVHLE9BQU8sR0FBNEI7WUFDckMsU0FBUyxFQUFFLElBQUk7WUFDZixjQUFjLEVBQUUsTUFBTTtZQUN0QixTQUFTLEVBQUUsV0FBVztZQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVE7U0FDbEQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDg1REFBd0M7YUFDM0M7Ozs7WUFyQm1CLFlBQVk7NENBeUJ2QixNQUFNLFNBQUMsZUFBZTs7OztJQURmLHVDQUFrRDs7SUFDMUQsa0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCAqIGFzIHNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcclxuXHJcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50LCBwYXJzZU9ubHlFbWFpbHMgfSBmcm9tICcuL2VtYWlsLWZvcm0tYWJzdHJhY3QuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVtYWlsRm9ybURlZmF1bHRJbnB1dCB7XHJcbiAgICBlbWFpbEJvZHk6IHN0cmluZztcclxuICAgIGVtYWlsVGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW1haWxGb3JtRGVmYXVsdE91dHB1dCB7XHJcbiAgICBjb25maXJtZWQ6IGJvb2xlYW47XHJcbiAgICBlbWFpbFJlY2VpdmVyczogc3RyaW5nW107XHJcbiAgICBlbWFpbEJvZHk6IHN0cmluZztcclxuICAgIGVtYWlsVGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BvbHAtbWQtZW1haWwtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2VtYWlsLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZvcm1Db21wb25lbnQgZXh0ZW5kcyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEVtYWlsRm9ybUNvbXBvbmVudD4sXHJcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBJRW1haWxGb3JtRGVmYXVsdElucHV0KSB7XHJcbiAgICAgICAgc3VwZXIoZGlhbG9nUmVmKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQm9keSA9IGRhdGEuZW1haWxCb2R5IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNTdWJtaXREaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbHMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgLy8gYm9keVxyXG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IHRoaXMubWVzc2FnZUJvZHk7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgaXQgaW50byBodG1sXHJcbiAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcigpO1xyXG4gICAgICAgIG1lc3NhZ2VCb2R5ID0gY29udmVydGVyLm1ha2VIdG1sKG1lc3NhZ2VCb2R5KTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBlbWFpbCBsaXN0XHJcbiAgICAgICAgY29uc3QgZW1haWxzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZW1haWxzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZWxlbSB8fCAoZWxlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYXJzZU9ubHlFbWFpbHMoeCk7XHJcbiAgICAgICAgICAgIHkuZm9yRWFjaChtID0+IHtcclxuICAgICAgICAgICAgICAgIGVtYWlscy5wdXNoKG0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3V0cHV0czogSUVtYWlsRm9ybURlZmF1bHRPdXRwdXQgPSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1lZDogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWxSZWNlaXZlcnM6IGVtYWlscyxcclxuICAgICAgICAgICAgZW1haWxCb2R5OiBtZXNzYWdlQm9keSxcclxuICAgICAgICAgICAgZW1haWxUaXRsZTogdGhpcy5kYXRhLmVtYWlsVGl0bGUgfHwgJycgLy8gdG9kbzpcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShvdXRwdXRzKTtcclxuICAgIH1cclxufVxyXG4iXX0=