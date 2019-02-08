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
    IEmailFormDefaultInput.prototype.title;
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
        data.title && (this.title = data.title);
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
                template: "<h2 mat-dialog-title>\r\n    {{title}}\r\n    <button class=\"float-right\"\r\n            mat-icon-button\r\n            tabIndex=\"-1\"\r\n            [mat-dialog-close]=\"true\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n    <form name=\"emailForm\" autocomplete=\"off\">\r\n        <div class=\"flex-box flex-column margin-bottom-15\">\r\n            <tag-input [(ngModel)]=\"emails\" #emailInputBox\r\n                       name=\"emailInputs\"\r\n                       [addOnPaste]=\"true\"\r\n                       [modelAsStrings]=\"true\"\r\n                       [trimTags]=\"true\"\r\n                       [editable]=\"true\"\r\n                       (focusout)=\"onOutOfTagInput($event)\"\r\n                       [errorMessages]=\"errorMessages\"\r\n                       [validators]=\"validators\"\r\n                       [secondaryPlaceholder]=\"'Emails'\"\r\n                       [separatorKeyCodes]=\"[32,44,58,59]\"\r\n                       [placeholder]=\"'More Emails'\">\r\n            </tag-input>\r\n\r\n            <div class=\"full-width margin-top-10\">\r\n                <textarea name=\"messageBody\"\r\n                          class=\"full-width\"\r\n                          #emailBody\r\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\r\n                          placeholder=\"Type your personal message here\"\r\n                          [(ngModel)]=\"messageBody\">\r\n                </textarea>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button mat-flat-button\r\n            color=\"primary\"\r\n            [disabled]=\"isSubmitDisabled\"\r\n            (click)=\"onSubmit()\">\r\n        Send\r\n    </button>\r\n</mat-dialog-actions>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFlBQVksRUFBRSxlQUFlLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFFaEcsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFFckMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRTlGLDRDQUlDOzs7SUFIRyx1Q0FBYzs7SUFDZCwyQ0FBa0I7O0lBQ2xCLDRDQUFtQjs7Ozs7QUFHdkIsNkNBS0M7OztJQUpHLDRDQUFtQjs7SUFDbkIsaURBQXlCOztJQUN6Qiw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7QUFPdkIsTUFBTSxPQUFPLGtCQUFtQixTQUFRLDBCQUEwQjs7Ozs7SUFFOUQsWUFBbUIsU0FBMkMsRUFDMUIsSUFBNEI7UUFDNUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRkYsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFHNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBR00sUUFBUTs7O1lBRVAsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOzs7Y0FHNUIsU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUMxQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7O2NBR3hDLE1BQU0sR0FBRyxFQUFFO1FBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbkIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O2tCQUN0QixDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQzs7Y0FFRyxPQUFPLEdBQTRCO1lBQ3JDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsY0FBYyxFQUFFLE1BQU07WUFDdEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw0MERBQXdDO2FBQzNDOzs7O1lBdEJtQixZQUFZOzRDQTBCdkIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEZix1Q0FBa0Q7O0lBQzFELGtDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgKiBhcyBzaG93ZG93biBmcm9tICdzaG93ZG93bic7XHJcblxyXG5pbXBvcnQgeyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCwgcGFyc2VPbmx5RW1haWxzIH0gZnJvbSAnLi9lbWFpbC1mb3JtLWFic3RyYWN0LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbWFpbEZvcm1EZWZhdWx0SW5wdXQge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGVtYWlsQm9keTogc3RyaW5nO1xyXG4gICAgZW1haWxUaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbWFpbEZvcm1EZWZhdWx0T3V0cHV0IHtcclxuICAgIGNvbmZpcm1lZDogYm9vbGVhbjtcclxuICAgIGVtYWlsUmVjZWl2ZXJzOiBzdHJpbmdbXTtcclxuICAgIGVtYWlsQm9keTogc3RyaW5nO1xyXG4gICAgZW1haWxUaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9scC1tZC1lbWFpbC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZW1haWwtZm9ybS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsRm9ybUNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RW1haWxGb3JtQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IElFbWFpbEZvcm1EZWZhdWx0SW5wdXQpIHtcclxuICAgICAgICBzdXBlcihkaWFsb2dSZWYpO1xyXG5cclxuICAgICAgICBkYXRhLnRpdGxlICYmICh0aGlzLnRpdGxlID0gZGF0YS50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQm9keSA9IGRhdGEuZW1haWxCb2R5IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNTdWJtaXREaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbHMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgLy8gYm9keVxyXG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IHRoaXMubWVzc2FnZUJvZHk7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgaXQgaW50byBodG1sXHJcbiAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcigpO1xyXG4gICAgICAgIG1lc3NhZ2VCb2R5ID0gY29udmVydGVyLm1ha2VIdG1sKG1lc3NhZ2VCb2R5KTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBlbWFpbCBsaXN0XHJcbiAgICAgICAgY29uc3QgZW1haWxzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZW1haWxzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZWxlbSB8fCAoZWxlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYXJzZU9ubHlFbWFpbHMoeCk7XHJcbiAgICAgICAgICAgIHkuZm9yRWFjaChtID0+IHtcclxuICAgICAgICAgICAgICAgIGVtYWlscy5wdXNoKG0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3V0cHV0czogSUVtYWlsRm9ybURlZmF1bHRPdXRwdXQgPSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1lZDogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWxSZWNlaXZlcnM6IGVtYWlscyxcclxuICAgICAgICAgICAgZW1haWxCb2R5OiBtZXNzYWdlQm9keSxcclxuICAgICAgICAgICAgZW1haWxUaXRsZTogdGhpcy5kYXRhLmVtYWlsVGl0bGUgfHwgJycgLy8gdG9kbzpcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShvdXRwdXRzKTtcclxuICAgIH1cclxufVxyXG4iXX0=