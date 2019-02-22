/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {number} */
var AlertTypeEnum = {
    none: 0,
    info: 1,
    warning: 2,
    running: 3,
    success: 4,
    error: 5,
};
export { AlertTypeEnum };
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
export { AlertBoxComponent };
if (false) {
    /** @type {?} */
    AlertBoxComponent.prototype.kind;
    /** @type {?} */
    AlertBoxComponent.prototype.message;
    /** @type {?} */
    AlertBoxComponent.prototype.subMessage;
    /** @type {?} */
    AlertBoxComponent.prototype.dismissible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3JELE9BQVE7SUFDUixPQUFRO0lBQ1IsVUFBVztJQUNYLFVBQVc7SUFDWCxVQUFXO0lBQ1gsUUFBUzs7Ozs7Ozs7O0FBR2I7SUFZSTtJQUFnQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBckJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixpeUZBQXlDOztpQkFFNUM7Ozs7O3VCQUdJLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBWVYsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxpQkFBaUI7OztJQUUxQixpQ0FBNkI7O0lBQzdCLG9DQUF5Qjs7SUFDekIsdUNBQTRCOztJQUM1Qix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gQWxlcnRUeXBlRW51bSB7XG4gICAgbm9uZSA9IDAsXG4gICAgaW5mbyA9IDEsXG4gICAgd2FybmluZyA9IDIsXG4gICAgcnVubmluZyA9IDMsXG4gICAgc3VjY2VzcyA9IDQsXG4gICAgZXJyb3IgPSA1XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1tZC1hbGVydC1ib3gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FsZXJ0LWJveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGtpbmQ6IEFsZXJ0VHlwZUVudW07XG4gICAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN1Yk1lc3NhZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNtaXNzaWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICB0aGlzLmtpbmQgPSBBbGVydFR5cGVFbnVtLm5vbmU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnN1Yk1lc3NhZ2UgPSAnJztcbiAgICB9XG59XG4iXX0=