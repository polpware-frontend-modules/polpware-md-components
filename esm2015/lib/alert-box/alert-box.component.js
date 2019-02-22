/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {number} */
const AlertTypeEnum = {
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
export class AlertBoxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    dismiss() {
        this.kind = AlertTypeEnum.none;
        this.message = '';
        this.subMessage = '';
    }
}
AlertBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-md-alert-box',
                template: "<div class=\"polp-alert-box\" *ngIf=\"kind > 0\">\n    <ng-container [ngSwitch]=\"kind\" class=\"polp-alert-box\">    \n        <div class=\"bs-like-alert alert-info\" *ngSwitchCase=\"1\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        info\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-warning\" *ngSwitchCase=\"2\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        warning\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-info\" *ngSwitchCase=\"3\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons animate-spin\">\n                        refresh\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-success\" *ngSwitchCase=\"4\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        check_circle\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n        <div class=\"bs-like-alert alert-error\" *ngSwitchCase=\"5\">\n            <div class=\"message-body\">\n                <p>\n                    <i class=\"material-icons\">\n                        error\n                    </i>\n                    {{message}}\n                </p>\n                <p *ngIf=\"subMessage\">\n                    <small>\n                        {{subMessage}}\n                    </small>\n                </p>\n            </div>\n        </div>\n    </ng-container>\n    <button mat-icon-button (click)=\"dismiss()\" class=\"close-btn\" *ngIf=\"dismissible\">\n        <i class=\"material-icons\">\n            close\n        </i>        \n    </button>\n</div>\n",
                styles: [".polp-alert-box{position:relative}.polp-alert-box .close-btn{position:absolute;top:0;right:0}.polp-alert-box .bs-like-alert{display:flex;border-radius:2px;box-shadow:5px 5px 10px rgba(0,0,0,.3);color:#004085;background:#cce5ff;border-color:#cce5ff}.polp-alert-box .bs-like-alert a{color:#004085}.polp-alert-box .bs-like-alert a:hover{text-decoration:underline}.polp-alert-box .bs-like-alert>.message-body{margin:20px}.polp-alert-box .bs-like-alert>.message-body p{margin-top:0;margin-bottom:0}.polp-alert-box .bs-like-alert>.message-body p:first-child{display:inline-flex;align-items:center}.polp-alert-box .bs-like-alert>.message-body p:first-child i{margin-right:5px}.polp-alert-box .bs-like-alert.alert-warning{color:#856404;background:#fff3cd;border-color:#fff3cd}.polp-alert-box .bs-like-alert.alert-warning h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-warning a{color:#856404}.polp-alert-box .bs-like-alert.alert-error{color:#721c24;background:#f8d7da;border-color:#f8d7da}.polp-alert-box .bs-like-alert.alert-error a{color:#721c24}.polp-alert-box .bs-like-alert.alert-error h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-success{color:#155724;background:#d4edda;border-color:#d4edda}.polp-alert-box .bs-like-alert.alert-success a{color:#155724}.polp-alert-box .bs-like-alert.alert-success h3{border-bottom:1px solid}.polp-alert-box .bs-like-alert.alert-info{color:#0c5460;background:#d1ecf1;border-color:#d1ecf1}.polp-alert-box .bs-like-alert.alert-info a{color:#0c5460}.polp-alert-box .bs-like-alert.alert-info h3{border-bottom:1px solid}.animate-spin{-webkit-animation:4s linear infinite spin;animation:4s linear infinite spin}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
AlertBoxComponent.ctorParameters = () => [];
AlertBoxComponent.propDecorators = {
    kind: [{ type: Input }],
    message: [{ type: Input }],
    subMessage: [{ type: Input }],
    dismissible: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3JELE9BQVE7SUFDUixPQUFRO0lBQ1IsVUFBVztJQUNYLFVBQVc7SUFDWCxVQUFXO0lBQ1gsUUFBUzs7Ozs7Ozs7O0FBUWIsTUFBTSxPQUFPLGlCQUFpQjtJQU8xQixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixpeUZBQXlDOzthQUU1Qzs7Ozs7bUJBR0ksS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhOLGlDQUE2Qjs7SUFDN0Isb0NBQXlCOztJQUN6Qix1Q0FBNEI7O0lBQzVCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBBbGVydFR5cGVFbnVtIHtcbiAgICBub25lID0gMCxcbiAgICBpbmZvID0gMSxcbiAgICB3YXJuaW5nID0gMixcbiAgICBydW5uaW5nID0gMyxcbiAgICBzdWNjZXNzID0gNCxcbiAgICBlcnJvciA9IDVcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLW1kLWFsZXJ0LWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkga2luZDogQWxlcnRUeXBlRW51bTtcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3ViTWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRpc21pc3NpYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHRoaXMua2luZCA9IEFsZXJ0VHlwZUVudW0ubm9uZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuc3ViTWVzc2FnZSA9ICcnO1xuICAgIH1cbn1cbiJdfQ==