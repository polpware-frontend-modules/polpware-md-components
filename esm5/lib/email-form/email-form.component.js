/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var EmailFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EmailFormComponent, _super);
    function EmailFormComponent(dialogRef, data) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        data.title && (_this.title = data.title);
        _this.messageBody = data.emailBody || '';
        return _this;
    }
    Object.defineProperty(EmailFormComponent.prototype, "isSubmitDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.emails.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    // Override
    // Override
    /**
     * @return {?}
     */
    EmailFormComponent.prototype.onSubmit = 
    // Override
    /**
     * @return {?}
     */
    function () {
        // body
        /** @type {?} */
        var messageBody = this.messageBody;
        // Convert it into html
        /** @type {?} */
        var converter = new showdown.Converter();
        messageBody = converter.makeHtml(messageBody);
        // Prepare email list
        /** @type {?} */
        var emails = [];
        this.emails.forEach(function (elem) {
            /** @type {?} */
            var x = elem || (elem.value);
            /** @type {?} */
            var y = parseOnlyEmails(x);
            y.forEach(function (m) {
                emails.push(m);
            });
        });
        /** @type {?} */
        var outputs = {
            confirmed: true,
            emailReceivers: emails,
            emailBody: messageBody,
            emailTitle: this.data.emailTitle || '' // todo:
        };
        this.dialogRef.close(outputs);
    };
    EmailFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-email-form',
                    template: "<h2 mat-dialog-title>\r\n    {{title}}\r\n    <button class=\"float-right\"\r\n            mat-icon-button\r\n            tabIndex=\"-1\"\r\n            [mat-dialog-close]=\"true\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n    <form name=\"emailForm\" autocomplete=\"off\">\r\n        <div class=\"flex-box flex-column margin-bottom-15\">\r\n            <tag-input [(ngModel)]=\"emails\" #emailInputBox\r\n                       name=\"emailInputs\"\r\n                       [addOnPaste]=\"true\"\r\n                       [modelAsStrings]=\"true\"\r\n                       [trimTags]=\"true\"\r\n                       [editable]=\"true\"\r\n                       (focusout)=\"onOutOfTagInput($event)\"\r\n                       [errorMessages]=\"errorMessages\"\r\n                       [validators]=\"validators\"\r\n                       [secondaryPlaceholder]=\"'Emails'\"\r\n                       [separatorKeyCodes]=\"[32,44,58,59]\"\r\n                       [placeholder]=\"'More Emails'\">\r\n            </tag-input>\r\n\r\n            <div class=\"full-width margin-top-10\">\r\n                <textarea name=\"messageBody\"\r\n                          class=\"full-width\"\r\n                          #emailBody\r\n                          autosize [minRows]=\"5\" [maxRows]=\"10\"\r\n                          placeholder=\"Type your personal message here\"\r\n                          [(ngModel)]=\"messageBody\">\r\n                </textarea>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button mat-flat-button\r\n            color=\"primary\"\r\n            [disabled]=\"isSubmitDisabled\"\r\n            (click)=\"onSubmit()\">\r\n        Send\r\n    </button>\r\n</mat-dialog-actions>\r\n"
                }] }
    ];
    /** @nocollapse */
    EmailFormComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return EmailFormComponent;
}(EmailFormAbstractComponent));
export { EmailFormComponent };
if (false) {
    /** @type {?} */
    EmailFormComponent.prototype.dialogRef;
    /** @type {?} */
    EmailFormComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBYSxZQUFZLEVBQUUsZUFBZSxFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBRWhHLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUU5Riw0Q0FJQzs7O0lBSEcsdUNBQWM7O0lBQ2QsMkNBQWtCOztJQUNsQiw0Q0FBbUI7Ozs7O0FBR3ZCLDZDQUtDOzs7SUFKRyw0Q0FBbUI7O0lBQ25CLGlEQUF5Qjs7SUFDekIsNENBQWtCOztJQUNsQiw2Q0FBbUI7O0FBR3ZCO0lBSXdDLDhDQUEwQjtJQUU5RCw0QkFBbUIsU0FBMkMsRUFDMUIsSUFBNEI7UUFEaEUsWUFFSSxrQkFBTSxTQUFTLENBQUMsU0FJbkI7UUFOa0IsZUFBUyxHQUFULFNBQVMsQ0FBa0M7UUFDMUIsVUFBSSxHQUFKLElBQUksQ0FBd0I7UUFHNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7O0lBQzVDLENBQUM7SUFFRCxzQkFBVyxnREFBZ0I7Ozs7UUFBM0I7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELFdBQVc7Ozs7O0lBQ0oscUNBQVE7Ozs7O0lBQWY7OztZQUVRLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVzs7O1lBRzVCLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDMUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7OztZQUd4QyxNQUFNLEdBQUcsRUFBRTtRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O2dCQUNoQixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3RCLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQzs7WUFFRyxPQUFPLEdBQTRCO1lBQ3JDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsY0FBYyxFQUFFLE1BQU07WUFDdEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBOUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw0MERBQXdDO2lCQUMzQzs7OztnQkF0Qm1CLFlBQVk7Z0RBMEJ2QixNQUFNLFNBQUMsZUFBZTs7SUF3Qy9CLHlCQUFDO0NBQUEsQUEvQ0QsQ0FJd0MsMEJBQTBCLEdBMkNqRTtTQTNDWSxrQkFBa0I7OztJQUVmLHVDQUFrRDs7SUFDMUQsa0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCAqIGFzIHNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcclxuXHJcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50LCBwYXJzZU9ubHlFbWFpbHMgfSBmcm9tICcuL2VtYWlsLWZvcm0tYWJzdHJhY3QuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVtYWlsRm9ybURlZmF1bHRJbnB1dCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZW1haWxCb2R5OiBzdHJpbmc7XHJcbiAgICBlbWFpbFRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVtYWlsRm9ybURlZmF1bHRPdXRwdXQge1xyXG4gICAgY29uZmlybWVkOiBib29sZWFuO1xyXG4gICAgZW1haWxSZWNlaXZlcnM6IHN0cmluZ1tdO1xyXG4gICAgZW1haWxCb2R5OiBzdHJpbmc7XHJcbiAgICBlbWFpbFRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwb2xwLW1kLWVtYWlsLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdlbWFpbC1mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxGb3JtQ29tcG9uZW50IGV4dGVuZHMgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFbWFpbEZvcm1Db21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogSUVtYWlsRm9ybURlZmF1bHRJbnB1dCkge1xyXG4gICAgICAgIHN1cGVyKGRpYWxvZ1JlZik7XHJcblxyXG4gICAgICAgIGRhdGEudGl0bGUgJiYgKHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gZGF0YS5lbWFpbEJvZHkgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1N1Ym1pdERpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlscy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnJpZGVcclxuICAgIHB1YmxpYyBvblN1Ym1pdCgpIHtcclxuICAgICAgICAvLyBib2R5XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gdGhpcy5tZXNzYWdlQm9keTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBpdCBpbnRvIGh0bWxcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XHJcbiAgICAgICAgbWVzc2FnZUJvZHkgPSBjb252ZXJ0ZXIubWFrZUh0bWwobWVzc2FnZUJvZHkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGVtYWlsIGxpc3RcclxuICAgICAgICBjb25zdCBlbWFpbHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWFpbHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBlbGVtIHx8IChlbGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlT25seUVtYWlscyh4KTtcclxuICAgICAgICAgICAgeS5mb3JFYWNoKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgZW1haWxzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBvdXRwdXRzOiBJRW1haWxGb3JtRGVmYXVsdE91dHB1dCA9IHtcclxuICAgICAgICAgICAgY29uZmlybWVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbFJlY2VpdmVyczogZW1haWxzLFxyXG4gICAgICAgICAgICBlbWFpbEJvZHk6IG1lc3NhZ2VCb2R5LFxyXG4gICAgICAgICAgICBlbWFpbFRpdGxlOiB0aGlzLmRhdGEuZW1haWxUaXRsZSB8fCAnJyAvLyB0b2RvOlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKG91dHB1dHMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==