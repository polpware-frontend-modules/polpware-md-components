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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBYSxZQUFZLEVBQUUsZUFBZSxFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBRWhHLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUU5Riw0Q0FHQzs7O0lBRkcsMkNBQWtCOztJQUNsQiw0Q0FBbUI7Ozs7O0FBR3ZCLDZDQUtDOzs7SUFKRyw0Q0FBbUI7O0lBQ25CLGlEQUF5Qjs7SUFDekIsNENBQWtCOztJQUNsQiw2Q0FBbUI7O0FBR3ZCO0lBSXdDLDhDQUEwQjtJQUU5RCw0QkFBbUIsU0FBMkMsRUFDMUIsSUFBNEI7UUFEaEUsWUFFSSxrQkFBTSxTQUFTLENBQUMsU0FHbkI7UUFMa0IsZUFBUyxHQUFULFNBQVMsQ0FBa0M7UUFDMUIsVUFBSSxHQUFKLElBQUksQ0FBd0I7UUFHNUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzs7SUFDNUMsQ0FBQztJQUVELHNCQUFXLGdEQUFnQjs7OztRQUEzQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsV0FBVzs7Ozs7SUFDSixxQ0FBUTs7Ozs7SUFBZjs7O1lBRVEsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOzs7WUFHNUIsU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUMxQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7O1lBR3hDLE1BQU0sR0FBRyxFQUFFO1FBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7Z0JBQ2hCLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztnQkFDdEIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDOztZQUVHLE9BQU8sR0FBNEI7WUFDckMsU0FBUyxFQUFFLElBQUk7WUFDZixjQUFjLEVBQUUsTUFBTTtZQUN0QixTQUFTLEVBQUUsV0FBVztZQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVE7U0FDbEQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE3Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDQwREFBd0M7aUJBQzNDOzs7O2dCQXJCbUIsWUFBWTtnREF5QnZCLE1BQU0sU0FBQyxlQUFlOztJQXVDL0IseUJBQUM7Q0FBQSxBQTlDRCxDQUl3QywwQkFBMEIsR0EwQ2pFO1NBMUNZLGtCQUFrQjs7O0lBRWYsdUNBQWtEOztJQUMxRCxrQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0ICogYXMgc2hvd2Rvd24gZnJvbSAnc2hvd2Rvd24nO1xyXG5cclxuaW1wb3J0IHsgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQsIHBhcnNlT25seUVtYWlscyB9IGZyb20gJy4vZW1haWwtZm9ybS1hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW1haWxGb3JtRGVmYXVsdElucHV0IHtcclxuICAgIGVtYWlsQm9keTogc3RyaW5nO1xyXG4gICAgZW1haWxUaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbWFpbEZvcm1EZWZhdWx0T3V0cHV0IHtcclxuICAgIGNvbmZpcm1lZDogYm9vbGVhbjtcclxuICAgIGVtYWlsUmVjZWl2ZXJzOiBzdHJpbmdbXTtcclxuICAgIGVtYWlsQm9keTogc3RyaW5nO1xyXG4gICAgZW1haWxUaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9scC1tZC1lbWFpbC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZW1haWwtZm9ybS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsRm9ybUNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RW1haWxGb3JtQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IElFbWFpbEZvcm1EZWZhdWx0SW5wdXQpIHtcclxuICAgICAgICBzdXBlcihkaWFsb2dSZWYpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gZGF0YS5lbWFpbEJvZHkgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1N1Ym1pdERpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlscy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnJpZGVcclxuICAgIHB1YmxpYyBvblN1Ym1pdCgpIHtcclxuICAgICAgICAvLyBib2R5XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gdGhpcy5tZXNzYWdlQm9keTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBpdCBpbnRvIGh0bWxcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XHJcbiAgICAgICAgbWVzc2FnZUJvZHkgPSBjb252ZXJ0ZXIubWFrZUh0bWwobWVzc2FnZUJvZHkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGVtYWlsIGxpc3RcclxuICAgICAgICBjb25zdCBlbWFpbHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWFpbHMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBlbGVtIHx8IChlbGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlT25seUVtYWlscyh4KTtcclxuICAgICAgICAgICAgeS5mb3JFYWNoKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgZW1haWxzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBvdXRwdXRzOiBJRW1haWxGb3JtRGVmYXVsdE91dHB1dCA9IHtcclxuICAgICAgICAgICAgY29uZmlybWVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbFJlY2VpdmVyczogZW1haWxzLFxyXG4gICAgICAgICAgICBlbWFpbEJvZHk6IG1lc3NhZ2VCb2R5LFxyXG4gICAgICAgICAgICBlbWFpbFRpdGxlOiB0aGlzLmRhdGEuZW1haWxUaXRsZSB8fCAnJyAvLyB0b2RvOlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKG91dHB1dHMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==