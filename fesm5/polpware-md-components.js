import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { __extends } from 'tslib';
import { Converter } from 'showdown';
import { Component, Inject, Injectable, ViewChild, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

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
var EmailFormComponent = /** @class */ (function (_super) {
    __extends(EmailFormComponent, _super);
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
        var converter = new Converter();
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
                    template: "<h2 mat-dialog-title>\r\n    {{title}}\r\n    <button class=\"float-right\"\r\n            mat-icon-button\r\n            tabIndex=\"-1\"\r\n            [mat-dialog-close]=\"true\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n    <form name=\"emailForm\" autocomplete=\"off\">\r\n        <div class=\"flex-box flex-column margin-bottom-15\">\r\n            <tag-input [(ngModel)]=\"emails\" #emailInputBox\r\n                       name=\"emailInputs\"\r\n                       [addOnPaste]=\"true\"\r\n                       [modelAsStrings]=\"true\"\r\n                       [trimTags]=\"true\"\r\n                       [editable]=\"true\"\r\n                       (focusout)=\"onOutOfTagInput($event)\"\r\n                       [errorMessages]=\"errorMessages\"\r\n                       [validators]=\"validators\"\r\n                       [secondaryPlaceholder]=\"'Emails'\"\r\n                       [separatorKeyCodes]=\"[32,44,58,59]\"\r\n                       [placeholder]=\"'More Emails'\">\r\n            </tag-input>\r\n\r\n            <div class=\"full-width\">\r\n                <textarea name=\"messageBody\"\r\n                          matInput\r\n                          #emailBody\r\n                          cdkTextareaAutosize\r\n                          cdkAutosizeMinRows=\"2\"\r\n                          cdkAutosizeMaxRows=\"5\"                      \r\n                          placeholder=\"Type your personal message here\"\r\n                          [(ngModel)]=\"messageBody\">\r\n                </textarea>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button mat-flat-button\r\n            color=\"primary\"\r\n            [disabled]=\"isSubmitDisabled\"\r\n            (click)=\"onSubmit()\">\r\n        Send\r\n    </button>\r\n</mat-dialog-actions>\r\n"
                }] }
    ];
    /** @nocollapse */
    EmailFormComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return EmailFormComponent;
}(EmailFormAbstractComponent));

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
                        EmailFormComponent
                    ],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatProgressSpinnerModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        TagInputModule
                    ],
                    exports: [
                        PolpMdIndicatorModal,
                        EmailFormComponent
                    ],
                    entryComponents: [
                        PolpMdIndicatorModal,
                        EmailFormComponent
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

export { TableDataSourceAdaptor, PolpMdIndicatorModal, PolpMdSpinnerServiceImpl, parseEmails, parseOnlyEmails, EmailFormAbstractComponent, EmailFormComponent, PolpMdComponentsModule };

//# sourceMappingURL=polpware-md-components.js.map