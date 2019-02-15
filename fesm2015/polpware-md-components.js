import { DataSource } from '@angular/cdk/collections';
import { Converter } from 'showdown';
import { BehaviorSubject, Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HttpEventType } from '@angular/common/http';
import { guid } from '@polpware/fe-utilities';
import { Component, Inject, Injectable, ViewChild, HostBinding, Input, forwardRef, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatFormFieldControl, MatRadioGroup, MAT_SNACK_BAR_DATA, MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule, MatProgressBarModule, MatListModule } from '@angular/material';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AutosizeModule } from 'ngx-autosize';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class TableDataSourceAdaptor extends DataSource {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        super();
        this._database = _database;
        this._filterChange = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    get filter() { return this._filterChange.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filterChange.next(filter); }
    /**
     * @return {?}
     */
    connect() {
        return this._database.dataChange.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolpMdIndicatorModal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title || '';
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
PolpMdIndicatorModal.decorators = [
    { type: Component, args: [{
                selector: 'polp-md-indicator-modal',
                template: "<div class=\"full-width flex-box flex-column align-items-center\">\r\n  <mat-spinner>\r\n  </mat-spinner>\r\n  <h3>{{title}}</h3>\r\n</div>\r\n\r\n"
            }] }
];
/** @nocollapse */
PolpMdIndicatorModal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DismissingDelayPeroid = 300;
/** @type {?} */
const DefaultShowingDelayPeroid = 500;
class PolpMdSpinnerServiceImpl {
    /**
     * @param {?} _dialog
     */
    constructor(_dialog) {
        this._dialog = _dialog;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._diaglogRef = null;
        this._counter = 0;
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    show(title = 'Loading ...') {
        this._counter++;
        // If there is one already, use it.
        if (this._diaglogRef) {
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
            return;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(() => {
            // Clean up the timer
            this._showingTimer = null;
            this._diaglogRef = this._dialog.open(PolpMdIndicatorModal, {
                width: '250px',
                data: {
                    title: title
                }
            });
        }, this._showingDelay);
    }
    /**
     * @return {?}
     */
    hide() {
        this._counter--;
        if (this._counter > 0) {
            return;
        }
        // If the spinner has not been rendered.
        if (this._showingTimer) {
            clearTimeout(this._showingTimer);
            this._showingTimer = null;
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(() => {
                // Clean up the timer
                this._dismissingTimer = null;
                // Dismiss the dialog
                if (this._diaglogRef) {
                    this._diaglogRef.close();
                    this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._diaglogRef) {
            this._dismissingTimer = setTimeout(() => {
                // Dismiss the dialog
                if (this._diaglogRef) {
                    this._diaglogRef.close();
                    this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
        }
    }
}
PolpMdSpinnerServiceImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PolpMdSpinnerServiceImpl.ctorParameters = () => [
    { type: MatDialog }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
function parseEmails(addr_list) {
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
function parseOnlyEmails(addr_list) {
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
class EmailFormAbstractComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailFormComponent extends EmailFormAbstractComponent {
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
        const converter = new Converter();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioGroupFieldControl {
    constructor() {
        // Value
        this.stateChanges = new Subject();
        this.id = `radio-group-field-control-${RadioGroupFieldControl.nextId++}`;
        // Focused 
        this.focused = false;
        // Error state
        this.errorState = false;
        // control type
        this.controlType = 'radio-group-field';
        // Described 
        this.describedBy = '';
        this.ngControl = null;
    }
    // Value
    /**
     * @return {?}
     */
    get value() {
        return this.radioGroup.value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this.radioGroup.value = v;
        this.stateChanges.next();
    }
    // Place holder
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} plh
     * @return {?}
     */
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    // Never be empty
    /**
     * @return {?}
     */
    get empty() {
        return false;
    }
    // should floating 
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return true;
    }
    // required 
    /**
     * @return {?}
     */
    get required() {
        return this.radioGroup.required;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    set required(req) {
        // todo:
        this.radioGroup.required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.radioGroup.disabled;
    }
    /**
     * @param {?} dis
     * @return {?}
     */
    set disabled(dis) {
        this.radioGroup.disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    // Override 
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        // todo:
    }
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            this.radioGroup.writeValue(value);
        }
    }
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.radioGroup.registerOnChange(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.radioGroup.registerOnTouched(fn);
    }
}
// Unique id
RadioGroupFieldControl.nextId = 0;
RadioGroupFieldControl.decorators = [
    { type: Component, args: [{
                selector: 'polp-radio-group-field',
                template: "<mat-radio-group>\n    <mat-radio-button *ngFor=\"let item of radioOptions\" value=\"{{item.value}}\">{{item.text}}</mat-radio-button>\n</mat-radio-group>\n",
                providers: [
                    {
                        provide: MatFormFieldControl,
                        useExisting: RadioGroupFieldControl
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => RadioGroupFieldControl)
                    }
                ],
                styles: [".mat-radio-group .mat-radio-button{margin:0 5px}"]
            }] }
];
/** @nocollapse */
RadioGroupFieldControl.ctorParameters = () => [];
RadioGroupFieldControl.propDecorators = {
    radioGroup: [{ type: ViewChild, args: [MatRadioGroup,] }],
    id: [{ type: HostBinding }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    radioOptions: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }],
    required: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadFileComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
        this.responses = [];
        this.title = this.data.title || '';
        this.accept = this.data.accept || '*/';
        this.text = this.data.prelude || '';
        this.mode = this.data.progressMode || 'indeterminate';
    }
    /**
     * @return {?}
     */
    get isCloseDisabled() {
        return this.files.some(x => x.inProgress);
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close(this.responses);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    startUpload() {
        /** @type {?} */
        const fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.onchange = () => {
            // Validate inputs
            /** @type {?} */
            const message = this.data.validateInput(fileUpload.files);
            if (message) {
                this.error = message;
                return;
            }
            for (let index = 0; index < fileUpload.files.length; index++) {
                /** @type {?} */
                const file = fileUpload.files[index];
                this.files.push({
                    uuid: guid(),
                    data: file,
                    state: 'in',
                    inProgress: false,
                    progress: 0,
                    canRetry: false,
                    canCancel: true,
                    message: ''
                });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    cancelFile(file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    retryFile(file) {
        this.uploadFile(file);
        file.canRetry = false;
    }
    /**
     * @private
     * @param {?} file
     * @param {?} body
     * @return {?}
     */
    postUploadFile(file, body) {
        this.responses.push({
            uuid: file.uuid,
            body: body
        });
        // If this is the last one file which has been uploaded
        if (this.data.closeOnSunccess) {
            if (this.files.length === this.responses.length) {
                // Schedule to close
                setTimeout(() => {
                    this.close();
                });
            }
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        file.inProgress = true;
        file.sub = this.data.uploadService.upload(file.data, this.data.uploadUrl, this.data.makeFormData)
            .subscribe((value) => {
            switch (value.eventType) {
                case HttpEventType.UploadProgress:
                    file.progress = value.percent;
                    break;
                case HttpEventType.Response:
                    file.message = 'Upload Ok.';
                    file.inProgress = false;
                    file.canCancel = false;
                    file.canRetry = false;
                    this.postUploadFile(file, value.body);
                    break;
            }
        }, (error) => {
            file.inProgress = false;
            file.canRetry = true;
            file.message = `upload failure.`;
        });
    }
    /**
     * @private
     * @return {?}
     */
    uploadFiles() {
        /** @type {?} */
        const fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    removeFileFromArray(file) {
        /** @type {?} */
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }
}
UploadFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'plop-upload-file',
                template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            [disabled]=\"isCloseDisabled\"            \n            [mat-dialog-close]=\"true\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n    <div class=\"flex-box flex-column\">\n\n        <button mat-flat-button color=\"accent\" (click)=\"startUpload()\">\n            <mat-icon>file_upload</mat-icon>\n            {{text}}\n        </button>\n\n        <p *ngIf=\"error\" color=\"warn\">{{error}}</p>\n        \n        <mat-list>\n            <mat-list-item *ngFor=\"let file of files\">\n                <mat-progress-bar matLine *ngIf=\"file.inProgress\"\n                                  [value]=\"file.progress\" mode=\"{{mode}}\">\n                </mat-progress-bar>\n                <div matLine>\n                    <span>\n                        {{file.data.name}}\n                    </span>\n                    \n                    <span>\n                        {{file.data.message}}\n                    </span>\n                    \n                    <button mat-icon-button title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n                        <mat-icon>refresh</mat-icon>\n                    </button>\n                    <button mat-icon-button title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>\n            </mat-list-item>\n        </mat-list>\n\n    </div>    \n    \n    <input type=\"file\" id=\"polpFileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\"/>\n    \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-flat-button\n            [disabled]=\"isCloseDisabled\"\n            (click)=\"close()\">\n        Close\n    </button>\n</mat-dialog-actions>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
UploadFileComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmDialogComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackbarErrorComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
SnackbarErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-snackbar-error',
                template: `
        <i class="material-icons">error</i>
        <span>{{data}}</span>`,
                styles: [':host { display: inline-flex; align-items: center; } ']
            }] }
];
/** @nocollapse */
SnackbarErrorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackbarInfoComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
SnackbarInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-snackbar-info',
                template: `
        <i class="material-icons">notifications</i>
        <span>{{data}}</span>`,
                styles: [':host { display: inline-flex; align-items: center; } ']
            }] }
];
/** @nocollapse */
SnackbarInfoComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackbarSuccessComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
SnackbarSuccessComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-snackbar-success',
                template: `
        <i class="material-icons">check_circle</i>
        <span>{{data}}</span>`,
                styles: [':host { display: inline-flex; align-items: center; } ']
            }] }
];
/** @nocollapse */
SnackbarSuccessComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackbarWarnComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
SnackbarWarnComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-snackbar-warn',
                template: `
        <i class="material-icons">warning</i>
        <span>{{data}}</span>`,
                styles: [':host { display: inline-flex; align-items: center; } ']
            }] }
];
/** @nocollapse */
SnackbarWarnComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolpMdComponentsModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PolpMdComponentsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PolpMdComponentsModule
        };
    }
}
PolpMdComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PolpMdIndicatorModal,
                    EmailFormComponent,
                    RadioGroupFieldControl,
                    UploadFileComponent,
                    ConfirmDialogComponent,
                    SnackbarErrorComponent,
                    SnackbarInfoComponent,
                    SnackbarSuccessComponent,
                    SnackbarWarnComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatProgressSpinnerModule,
                    MatDialogModule,
                    MatButtonModule,
                    MatIconModule,
                    MatRadioModule,
                    MatProgressBarModule,
                    MatListModule,
                    TagInputModule,
                    AutosizeModule
                ],
                exports: [
                    PolpMdIndicatorModal,
                    EmailFormComponent,
                    RadioGroupFieldControl,
                    UploadFileComponent,
                    ConfirmDialogComponent
                ],
                entryComponents: [
                    PolpMdIndicatorModal,
                    EmailFormComponent,
                    UploadFileComponent,
                    ConfirmDialogComponent,
                    SnackbarErrorComponent,
                    SnackbarInfoComponent,
                    SnackbarSuccessComponent,
                    SnackbarWarnComponent
                ],
                providers: [
                    PolpMdSpinnerServiceImpl
                ]
            },] }
];
/** @nocollapse */
PolpMdComponentsModule.ctorParameters = () => [
    { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TableDataSourceAdaptor, PolpMdIndicatorModal, PolpMdSpinnerServiceImpl, parseEmails, parseOnlyEmails, EmailFormAbstractComponent, EmailFormComponent, RadioGroupFieldControl, UploadFileComponent, ConfirmDialogComponent, SnackbarErrorComponent, SnackbarInfoComponent, SnackbarSuccessComponent, SnackbarWarnComponent, PolpMdComponentsModule };

//# sourceMappingURL=polpware-md-components.js.map