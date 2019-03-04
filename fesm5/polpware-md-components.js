import { __extends } from 'tslib';
import { DataSource } from '@angular/cdk/collections';
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
var  /**
 * @template T
 */
TableDataSourceAdaptor = /** @class */ (function (_super) {
    __extends(TableDataSourceAdaptor, _super);
    function TableDataSourceAdaptor(_database) {
        var _this = _super.call(this) || this;
        _this._database = _database;
        _this._filterChange = new BehaviorSubject('');
        return _this;
    }
    Object.defineProperty(TableDataSourceAdaptor.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () { return this._filterChange.value; },
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TableDataSourceAdaptor.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._database.dataChange.asObservable();
    };
    /**
     * @return {?}
     */
    TableDataSourceAdaptor.prototype.disconnect = /**
     * @return {?}
     */
    function () {
    };
    return TableDataSourceAdaptor;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PolpMdIndicatorModal = /** @class */ (function () {
    function PolpMdIndicatorModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title || '';
    }
    /**
     * @return {?}
     */
    PolpMdIndicatorModal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    PolpMdIndicatorModal.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-indicator-modal',
                    template: "<div class=\"full-width flex-box flex-column align-items-center\">\r\n  <mat-spinner>\r\n  </mat-spinner>\r\n  <h3>{{title}}</h3>\r\n</div>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    PolpMdIndicatorModal.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return PolpMdIndicatorModal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DismissingDelayPeroid = 300;
/** @type {?} */
var DefaultShowingDelayPeroid = 500;
var PolpMdSpinnerServiceImpl = /** @class */ (function () {
    function PolpMdSpinnerServiceImpl(_dialog) {
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
    PolpMdSpinnerServiceImpl.prototype.setDelay = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    // Override
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    PolpMdSpinnerServiceImpl.prototype.show = 
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
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
        this._showingTimer = setTimeout(function () {
            // Clean up the timer
            _this._showingTimer = null;
            _this._diaglogRef = _this._dialog.open(PolpMdIndicatorModal, {
                width: '250px',
                data: {
                    title: title
                }
            });
        }, this._showingDelay);
    };
    /**
     * @return {?}
     */
    PolpMdSpinnerServiceImpl.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            this._dismissingTimer = setTimeout(function () {
                // Clean up the timer
                _this._dismissingTimer = null;
                // Dismiss the dialog
                if (_this._diaglogRef) {
                    _this._diaglogRef.close();
                    _this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._diaglogRef) {
            this._dismissingTimer = setTimeout(function () {
                _this._dismissingTimer = null;
                // Dismiss the dialog
                if (_this._diaglogRef) {
                    _this._diaglogRef.close();
                    _this._diaglogRef = null;
                }
            }, DismissingDelayPeroid);
        }
    };
    PolpMdSpinnerServiceImpl.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PolpMdSpinnerServiceImpl.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return PolpMdSpinnerServiceImpl;
}());

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
    var value = control.value;
    /** @type {?} */
    var re = /\S+@\S+\.\S+/;
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
var EmailPattern = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;
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
var EmailFormAbstractComponent = /** @class */ (function () {
    function EmailFormAbstractComponent(dialogRef) {
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
    Object.defineProperty(EmailFormAbstractComponent.prototype, "isSubmitDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.emails.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    EmailFormAbstractComponent.prototype.onOutOfTagInput = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        var _this = this;
        if (this.disableFocusEvent) {
            return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        // A tempory hack for fixing the focus issue
        // on invoking the onAddingRequested method ...
        /** @type {?} */
        var emails = parseEmails(this.emailInputBox.formValue);
        emails.forEach(function (v) {
            _this.emails.push(v);
        });
        this.emailInputBox.setInputValue('');
        // Jump to other place
        this.disableFocusEvent = true;
        this.emailBody.nativeElement.focus();
        this.disableFocusEvent = false;
    };
    EmailFormAbstractComponent.propDecorators = {
        emailInputBox: [{ type: ViewChild, args: ['emailInputBox',] }],
        emailBody: [{ type: ViewChild, args: ['emailBody',] }]
    };
    return EmailFormAbstractComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioGroupFieldControl = /** @class */ (function () {
    function RadioGroupFieldControl() {
        // Value
        this.stateChanges = new Subject();
        this.id = "radio-group-field-control-" + RadioGroupFieldControl.nextId++;
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
    Object.defineProperty(RadioGroupFieldControl.prototype, "value", {
        // Value
        get: 
        // Value
        /**
         * @return {?}
         */
        function () {
            return this.radioGroup.value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.radioGroup.value = v;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "placeholder", {
        // Place holder
        get: 
        // Place holder
        /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} plh
         * @return {?}
         */
        function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "empty", {
        // Never be empty
        get: 
        // Never be empty
        /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "shouldLabelFloat", {
        // should floating 
        get: 
        // should floating 
        /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "required", {
        // required 
        get: 
        // required 
        /**
         * @return {?}
         */
        function () {
            return this.radioGroup.required;
        },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            // todo:
            this.radioGroup.required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.radioGroup.disabled;
        },
        set: /**
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this.radioGroup.disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioGroupFieldControl.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    // Override 
    // Override 
    /**
     * @return {?}
     */
    RadioGroupFieldControl.prototype.ngOnDestroy = 
    // Override 
    /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    // set described by ids
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    RadioGroupFieldControl.prototype.setDescribedByIds = 
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.describedBy = ids.join(' ');
    };
    // onContainerClick(event: MouseEvent)
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    RadioGroupFieldControl.prototype.onContainerClick = 
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // todo:
    };
    // Control value accessor
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupFieldControl.prototype.writeValue = 
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this.radioGroup.writeValue(value);
        }
    };
    // todo: When will this be invoked???
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupFieldControl.prototype.registerOnChange = 
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.radioGroup.registerOnChange(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupFieldControl.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.radioGroup.registerOnTouched(fn);
    };
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
                            useExisting: forwardRef(function () { return RadioGroupFieldControl; })
                        }
                    ],
                    styles: [".mat-radio-group .mat-radio-button{margin:0 5px}"]
                }] }
    ];
    /** @nocollapse */
    RadioGroupFieldControl.ctorParameters = function () { return []; };
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
    return RadioGroupFieldControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
        this.responses = [];
        this.title = this.data.title || '';
        this.accept = this.data.accept || '*/';
        this.text = this.data.prelude || '';
        this.mode = this.data.progressMode || 'indeterminate';
    }
    Object.defineProperty(UploadFileComponent.prototype, "isCloseDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.files.some(function (x) { return x.inProgress; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(this.responses);
    };
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.startUpload = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.onchange = function () {
            // Validate inputs
            /** @type {?} */
            var message = _this.data.validateInput(fileUpload.files);
            if (message) {
                _this.error = message;
                return;
            }
            for (var index = 0; index < fileUpload.files.length; index++) {
                /** @type {?} */
                var file = fileUpload.files[index];
                _this.files.push({
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
            _this.uploadFiles();
        };
        fileUpload.click();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.cancelFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.retryFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.uploadFile(file);
        file.canRetry = false;
    };
    /**
     * @private
     * @param {?} file
     * @param {?} body
     * @return {?}
     */
    UploadFileComponent.prototype.postUploadFile = /**
     * @private
     * @param {?} file
     * @param {?} body
     * @return {?}
     */
    function (file, body) {
        var _this = this;
        this.responses.push({
            uuid: file.uuid,
            body: body
        });
        // If this is the last one file which has been uploaded
        if (this.data.closeOnSunccess) {
            if (this.files.length === this.responses.length) {
                // Schedule to close
                setTimeout(function () {
                    _this.close();
                });
            }
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.uploadFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        file.inProgress = true;
        file.sub = this.data.uploadService.upload(file.data, this.data.uploadUrl, this.data.makeFormData)
            .subscribe(function (value) {
            switch (value.eventType) {
                case HttpEventType.UploadProgress:
                    file.progress = value.percent;
                    break;
                case HttpEventType.Response:
                    file.message = 'Upload Ok.';
                    file.inProgress = false;
                    file.canCancel = false;
                    file.canRetry = false;
                    _this.postUploadFile(file, value.body);
                    break;
            }
        }, function (error) {
            file.inProgress = false;
            file.canRetry = true;
            file.message = "upload failure.";
        });
    };
    /**
     * @private
     * @return {?}
     */
    UploadFileComponent.prototype.uploadFiles = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.value = '';
        this.files.forEach(function (file) {
            _this.uploadFile(file);
        });
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.removeFileFromArray = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    };
    UploadFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plop-upload-file',
                    template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            [disabled]=\"isCloseDisabled\"            \n            [mat-dialog-close]=\"true\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n    <div class=\"flex-box flex-column\">\n\n        <button mat-flat-button color=\"accent\" (click)=\"startUpload()\">\n            <mat-icon>file_upload</mat-icon>\n            {{text}}\n        </button>\n\n        <p *ngIf=\"error\" color=\"warn\">{{error}}</p>\n        \n        <mat-list>\n            <mat-list-item *ngFor=\"let file of files\">\n                <mat-progress-bar matLine *ngIf=\"file.inProgress\"\n                                  [value]=\"file.progress\" mode=\"{{mode}}\">\n                </mat-progress-bar>\n                <div matLine>\n                    <span>\n                        {{file.data.name}}\n                    </span>\n                    \n                    <span>\n                        {{file.data.message}}\n                    </span>\n                    \n                    <button mat-icon-button title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n                        <mat-icon>refresh</mat-icon>\n                    </button>\n                    <button mat-icon-button title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>\n            </mat-list-item>\n        </mat-list>\n\n    </div>    \n    \n    <input type=\"file\" id=\"polpFileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\"/>\n    \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-flat-button\n            [disabled]=\"isCloseDisabled\"\n            (click)=\"close()\">\n        Close\n    </button>\n</mat-dialog-actions>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UploadFileComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return UploadFileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ConfirmDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-confirm-dialog',
                    template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    {{data.message}}\n</div>\n<mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" color=\"primary\">No</button>\n    <button mat-button [mat-dialog-close]=\"true\" color=\"warn\">Yes</button>\n</mat-dialog-actions>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ConfirmDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SnackbarErrorComponent = /** @class */ (function () {
    function SnackbarErrorComponent(data) {
        this.data = data;
    }
    SnackbarErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-snackbar-error',
                    template: "\n        <i class=\"material-icons\">error</i>\n        <span>{{data}}</span>",
                    styles: [':host { display: inline-flex; align-items: center; } ']
                }] }
    ];
    /** @nocollapse */
    SnackbarErrorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SnackbarInfoComponent = /** @class */ (function () {
    function SnackbarInfoComponent(data) {
        this.data = data;
    }
    SnackbarInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-snackbar-info',
                    template: "\n        <i class=\"material-icons\">notifications</i>\n        <span>{{data}}</span>",
                    styles: [':host { display: inline-flex; align-items: center; } ']
                }] }
    ];
    /** @nocollapse */
    SnackbarInfoComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarInfoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SnackbarSuccessComponent = /** @class */ (function () {
    function SnackbarSuccessComponent(data) {
        this.data = data;
    }
    SnackbarSuccessComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-snackbar-success',
                    template: "\n        <i class=\"material-icons\">check_circle</i>\n        <span>{{data}}</span>",
                    styles: [':host { display: inline-flex; align-items: center; } ']
                }] }
    ];
    /** @nocollapse */
    SnackbarSuccessComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarSuccessComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SnackbarWarnComponent = /** @class */ (function () {
    function SnackbarWarnComponent(data) {
        this.data = data;
    }
    SnackbarWarnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-snackbar-warn',
                    template: "\n        <i class=\"material-icons\">warning</i>\n        <span>{{data}}</span>",
                    styles: [':host { display: inline-flex; align-items: center; } ']
                }] }
    ];
    /** @nocollapse */
    SnackbarWarnComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarWarnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AlertTypeEnum = {
    none: 0,
    info: 1,
    warning: 2,
    running: 3,
    success: 4,
    error: 5,
};
AlertTypeEnum[AlertTypeEnum.none] = 'none';
AlertTypeEnum[AlertTypeEnum.info] = 'info';
AlertTypeEnum[AlertTypeEnum.warning] = 'warning';
AlertTypeEnum[AlertTypeEnum.running] = 'running';
AlertTypeEnum[AlertTypeEnum.success] = 'success';
AlertTypeEnum[AlertTypeEnum.error] = 'error';
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent() {
    }
    /**
     * @return {?}
     */
    AlertBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertBoxComponent.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        this.kind = AlertTypeEnum.none;
        this.message = '';
        this.subMessage = '';
    };
    AlertBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-md-alert-box',
                    template: "<div class=\"polp-alert-box\" *ngIf=\"kind > 0\">\n    <ng-container [ngSwitch]=\"kind\" class=\"polp-alert-box\">    \n        <div class=\"bs-like-alert alert-info\" *ngSwitchCase=\"1\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        info\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-warning\" *ngSwitchCase=\"2\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        warning\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-info\" *ngSwitchCase=\"3\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons animate-spin\">\n                        refresh\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-success\" *ngSwitchCase=\"4\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        check_circle\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-error\" *ngSwitchCase=\"5\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        error\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n    </ng-container>\n    <button mat-icon-button (click)=\"dismiss()\" class=\"close-btn\" *ngIf=\"dismissible\">\n        <i class=\"material-icons\">\n            close\n        </i>        \n    </button>\n</div>\n",
                    styles: [".polp-alert-box{position:relative}.polp-alert-box .close-btn{position:absolute;top:0;right:0}.polp-alert-box .bs-like-alert{display:flex;border-radius:2px;box-shadow:5px 5px 10px rgba(0,0,0,.3);color:#004085;background:#cce5ff;border-color:#cce5ff}.polp-alert-box .bs-like-alert a{color:#004085}.polp-alert-box .bs-like-alert a:hover{text-decoration:underline}.polp-alert-box .bs-like-alert>.message-body{margin:20px}.polp-alert-box .bs-like-alert>.message-body p{margin-top:0;margin-bottom:0}.polp-alert-box .bs-like-alert>.message-body p:first-child{display:inline-flex;align-items:center}.polp-alert-box .bs-like-alert>.message-body p:first-child i{margin-right:5px}.polp-alert-box .bs-like-alert.alert-warning{color:#856404;background:#fff3cd;border-color:#fff3cd}.polp-alert-box .bs-like-alert.alert-warning h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-warning a{color:#856404}.polp-alert-box .bs-like-alert.alert-error{color:#721c24;background:#f8d7da;border-color:#f8d7da}.polp-alert-box .bs-like-alert.alert-error a{color:#721c24}.polp-alert-box .bs-like-alert.alert-error h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-success{color:#155724;background:#d4edda;border-color:#d4edda}.polp-alert-box .bs-like-alert.alert-success a{color:#155724}.polp-alert-box .bs-like-alert.alert-success h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-info{color:#0c5460;background:#d1ecf1;border-color:#d1ecf1}.polp-alert-box .bs-like-alert.alert-info a{color:#0c5460}.polp-alert-box .bs-like-alert.alert-info h3{border-bottom:1px solid}.animate-spin{-webkit-animation:4s linear infinite spin;animation:4s linear infinite spin}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    AlertBoxComponent.ctorParameters = function () { return []; };
    AlertBoxComponent.propDecorators = {
        kind: [{ type: Input }],
        message: [{ type: Input }],
        subMessage: [{ type: Input }],
        dismissible: [{ type: Input }]
    };
    return AlertBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PolpMdComponentsModule = /** @class */ (function () {
    function PolpMdComponentsModule(parentModule) {
        if (parentModule) {
            throw new Error('PolpMdComponentsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @return {?}
     */
    PolpMdComponentsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PolpMdComponentsModule
        };
    };
    PolpMdComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        PolpMdIndicatorModal,
                        RadioGroupFieldControl,
                        UploadFileComponent,
                        ConfirmDialogComponent,
                        SnackbarErrorComponent,
                        SnackbarInfoComponent,
                        SnackbarSuccessComponent,
                        SnackbarWarnComponent,
                        MessageFormComponent,
                        AlertBoxComponent
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
                        RadioGroupFieldControl,
                        UploadFileComponent,
                        ConfirmDialogComponent,
                        AlertBoxComponent
                    ],
                    entryComponents: [
                        PolpMdIndicatorModal,
                        UploadFileComponent,
                        ConfirmDialogComponent,
                        SnackbarErrorComponent,
                        SnackbarInfoComponent,
                        SnackbarSuccessComponent,
                        SnackbarWarnComponent,
                        MessageFormComponent
                    ],
                    providers: [
                        PolpMdSpinnerServiceImpl
                    ]
                },] }
    ];
    /** @nocollapse */
    PolpMdComponentsModule.ctorParameters = function () { return [
        { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PolpMdComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TableDataSourceAdaptor, PolpMdIndicatorModal, PolpMdSpinnerServiceImpl, parseEmails, parseOnlyEmails, EmailFormAbstractComponent, RadioGroupFieldControl, UploadFileComponent, ConfirmDialogComponent, MessageFormComponent, SnackbarErrorComponent, SnackbarInfoComponent, SnackbarSuccessComponent, SnackbarWarnComponent, AlertTypeEnum, AlertBoxComponent, PolpMdComponentsModule };

//# sourceMappingURL=polpware-md-components.js.map