/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ViewChild, ElementRef } from '@angular/core';
import { TagInputComponent } from 'ngx-chips';
/**
 * @param {?} control
 * @return {?}
 */
function isValidEmail(control) {
    /** @type {?} */
    const value = control.value;
    /** @type {?} */
    const re = /\S+@\S+\.\S+/;
    if (re.test(value)) {
        return null;
    }
    return {
        'isValidEmail': true
    };
}
/**
 * @param {?} text
 * @return {?}
 */
function display_name(text) {
    /* Remove all quotes
       Remove whitespace, brackets, and commas from the ends. */
    return text.replace(/(^[\s,>]+)|"|([\s,<]+$)/g, '');
}
/** @type {?} */
const EmailPattern = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;
/**
 * @param {?} addr_list
 * @return {?}
 */
export function parseEmails(addr_list) {
    /* Regex source:
           https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        */
    /** @type {?} */
    var emails = [];
    /** @type {?} */
    var match;
    /** @type {?} */
    var idx = 0;
    while (match = EmailPattern.exec(addr_list)) {
        /** @type {?} */
        var display;
        if (display = display_name(addr_list.substring(idx, match['index']))) {
            emails.push('"' + display + '" ' + '<' + match[0] + '>');
        }
        else {
            emails.push(match[0]);
        }
        idx = match['index'] + match[0].length;
    }
    return emails;
}
// TODO: Improve 
/**
 * @param {?} addr_list
 * @return {?}
 */
export function parseOnlyEmails(addr_list) {
    /** @type {?} */
    var emails = [];
    /** @type {?} */
    var match;
    while (match = EmailPattern.exec(addr_list)) {
        emails.push(match[0]);
    }
    return emails;
}
/**
 * @abstract
 */
export class EmailFormAbstractComponent {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.validators = [isValidEmail];
        this.errorMessages = {
            'isValidEmail': 'Please input a valid email'
        };
        this.title = 'Send out an email';
        this.emails = [];
        this.messageBody = '';
        this.disableFocusEvent = false;
    }
    /**
     * @return {?}
     */
    get isSubmitDisabled() {
        return this.emails.length === 0;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onOutOfTagInput(evt) {
        if (this.disableFocusEvent) {
            return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        // A tempory hack for fixing the focus issue
        // on invoking the onAddingRequested method ...
        /** @type {?} */
        const emails = parseEmails(this.emailInputBox.formValue);
        emails.forEach(v => {
            this.emails.push(v);
        });
        this.emailInputBox.setInputValue('');
        // Jump to other place
        this.disableFocusEvent = true;
        this.emailBody.nativeElement.focus();
        this.disableFocusEvent = false;
    }
}
EmailFormAbstractComponent.propDecorators = {
    emailInputBox: [{ type: ViewChild, args: ['emailInputBox',] }],
    emailBody: [{ type: ViewChild, args: ['emailBody',] }]
};
if (false) {
    /** @type {?} */
    EmailFormAbstractComponent.prototype.emailInputBox;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.emailBody;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.title;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.messageBody;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.emails;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.validators;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.errorMessages;
    /**
     * @type {?}
     * @private
     */
    EmailFormAbstractComponent.prototype.disableFocusEvent;
    /** @type {?} */
    EmailFormAbstractComponent.prototype.dialogRef;
    /**
     * @abstract
     * @return {?}
     */
    EmailFormAbstractComponent.prototype.onSubmit = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybS1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0tYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQU05QyxTQUFTLFlBQVksQ0FBQyxPQUFPOztVQUNuQixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7O1VBQ3JCLEVBQUUsR0FBRyxjQUFjO0lBQ3pCLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTztRQUNILGNBQWMsRUFBRSxJQUFJO0tBQ3ZCLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsWUFBWSxDQUFDLElBQUk7SUFDdEI7Z0VBQzREO0lBQzVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDOztNQUVLLFlBQVksR0FBRyxzSUFBc0k7Ozs7O0FBRTNKLE1BQU0sVUFBVSxXQUFXLENBQUMsU0FBUzs7Ozs7UUFJN0IsTUFBTSxHQUFHLEVBQUU7O1FBQUUsS0FBSzs7UUFBRSxHQUFHLEdBQUcsQ0FBQztJQUMvQixPQUFPLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOztZQUNyQyxPQUFPO1FBQ1gsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzVEO2FBQ0k7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxTQUFTOztRQUNqQyxNQUFNLEdBQUcsRUFBRTs7UUFBRSxLQUFLO0lBQ3RCLE9BQU8sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7Ozs7QUFFRCxNQUFNLE9BQWdCLDBCQUEwQjs7OztJQWlCNUMsWUFBbUIsU0FBbUQ7UUFBbkQsY0FBUyxHQUFULFNBQVMsQ0FBMEM7UUFQL0QsZUFBVSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsa0JBQWEsR0FBRztZQUNuQixjQUFjLEVBQUUsNEJBQTRCO1NBQy9DLENBQUM7UUFNRSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBSU0sZUFBZSxDQUFDLEdBQUc7UUFFdEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7OztjQUloQixNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OzRCQXREQSxTQUFTLFNBQUMsZUFBZTt3QkFDekIsU0FBUyxTQUFDLFdBQVc7Ozs7SUFEdEIsbURBQTZEOztJQUM3RCwrQ0FBOEM7O0lBRTlDLDJDQUFxQjs7SUFFckIsaURBQTJCOztJQUUzQiw0Q0FBMEI7O0lBQzFCLGdEQUFtQzs7SUFDbkMsbURBRUU7Ozs7O0lBRUYsdURBQW1DOztJQUV2QiwrQ0FBMEQ7Ozs7O0lBYXRFLGdFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBUYWdJbnB1dENvbXBvbmVudCB9IGZyb20gJ25neC1jaGlwcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBzaG93ZG93biBmcm9tICdzaG93ZG93bic7XHJcblxyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoY29udHJvbCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG4gICAgY29uc3QgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XHJcbiAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgJ2lzVmFsaWRFbWFpbCc6IHRydWVcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlfbmFtZSh0ZXh0KSB7XHJcbiAgICAvKiBSZW1vdmUgYWxsIHF1b3RlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIFJlbW92ZSB3aGl0ZXNwYWNlLCBicmFja2V0cywgYW5kIGNvbW1hcyBmcm9tIHRoZSBlbmRzLiAqL1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvKF5bXFxzLD5dKyl8XCJ8KFtcXHMsPF0rJCkvZywgJycpO1xyXG59XHJcblxyXG5jb25zdCBFbWFpbFBhdHRlcm4gPSAvW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKi9nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRW1haWxzKGFkZHJfbGlzdCkge1xyXG4gICAgLyogUmVnZXggc291cmNlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI3ZhbGlkLWUtbWFpbC1hZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICovXHJcbiAgICB2YXIgZW1haWxzID0gW10sIG1hdGNoLCBpZHggPSAwO1xyXG4gICAgd2hpbGUgKG1hdGNoID0gRW1haWxQYXR0ZXJuLmV4ZWMoYWRkcl9saXN0KSkge1xyXG4gICAgICAgIHZhciBkaXNwbGF5O1xyXG4gICAgICAgIGlmIChkaXNwbGF5ID0gZGlzcGxheV9uYW1lKGFkZHJfbGlzdC5zdWJzdHJpbmcoaWR4LCBtYXRjaFsnaW5kZXgnXSkpKSB7XHJcbiAgICAgICAgICAgIGVtYWlscy5wdXNoKCdcIicgKyBkaXNwbGF5ICsgJ1wiICcgKyAnPCcgKyBtYXRjaFswXSArICc+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbWFpbHMucHVzaChtYXRjaFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkeCA9IG1hdGNoWydpbmRleCddICsgbWF0Y2hbMF0ubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtYWlscztcclxufVxyXG5cclxuLy8gVE9ETzogSW1wcm92ZSBcclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT25seUVtYWlscyhhZGRyX2xpc3QpIHtcclxuICAgIHZhciBlbWFpbHMgPSBbXSwgbWF0Y2g7XHJcbiAgICB3aGlsZSAobWF0Y2ggPSBFbWFpbFBhdHRlcm4uZXhlYyhhZGRyX2xpc3QpKSB7XHJcbiAgICAgICAgZW1haWxzLnB1c2gobWF0Y2hbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtYWlscztcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdlbWFpbElucHV0Qm94JykgZW1haWxJbnB1dEJveDogVGFnSW5wdXRDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKCdlbWFpbEJvZHknKSBlbWFpbEJvZHk6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VCb2R5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGVtYWlsczogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyB2YWxpZGF0b3JzID0gW2lzVmFsaWRFbWFpbF07XHJcbiAgICBwdWJsaWMgZXJyb3JNZXNzYWdlcyA9IHtcclxuICAgICAgICAnaXNWYWxpZEVtYWlsJzogJ1BsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGRpc2FibGVGb2N1c0V2ZW50OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudD4pIHtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdTZW5kIG91dCBhbiBlbWFpbCc7XHJcbiAgICAgICAgdGhpcy5lbWFpbHMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvY3VzRXZlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzU3VibWl0RGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxzLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25TdWJtaXQoKTtcclxuXHJcbiAgICBwdWJsaWMgb25PdXRPZlRhZ0lucHV0KGV2dCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlRm9jdXNFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIEEgdGVtcG9yeSBoYWNrIGZvciBmaXhpbmcgdGhlIGZvY3VzIGlzc3VlXHJcbiAgICAgICAgLy8gb24gaW52b2tpbmcgdGhlIG9uQWRkaW5nUmVxdWVzdGVkIG1ldGhvZCAuLi5cclxuICAgICAgICBjb25zdCBlbWFpbHMgPSBwYXJzZUVtYWlscyh0aGlzLmVtYWlsSW5wdXRCb3guZm9ybVZhbHVlKTtcclxuXHJcbiAgICAgICAgZW1haWxzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxzLnB1c2godik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1haWxJbnB1dEJveC5zZXRJbnB1dFZhbHVlKCcnKTtcclxuXHJcbiAgICAgICAgLy8gSnVtcCB0byBvdGhlciBwbGFjZVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvY3VzRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW1haWxCb2R5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9jdXNFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=