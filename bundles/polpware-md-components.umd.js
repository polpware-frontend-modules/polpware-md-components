(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@polpware/md-components', ['exports', '@angular/core', '@angular/material'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['md-components'] = {}),global.ng.core,global.ng.material));
}(this, (function (exports,core,material) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'polp-md-indicator-modal',
                        template: "<div class=\"full-width flex-box flex-column align-items-center\">\r\n  <mat-spinner>\r\n  </mat-spinner>\r\n  <h3>{{title}}</h3>\r\n</div>\r\n\r\n"
                    }] }
        ];
        /** @nocollapse */
        PolpMdIndicatorModal.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
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
                if (title === void 0) {
                    title = 'Loading ...';
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PolpMdSpinnerServiceImpl.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        return PolpMdSpinnerServiceImpl;
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
            { type: core.NgModule, args: [{
                        declarations: [PolpMdIndicatorModal],
                        imports: [
                            material.MatProgressSpinnerModule
                        ],
                        exports: [PolpMdIndicatorModal],
                        entryComponents: [
                            PolpMdIndicatorModal
                        ],
                        providers: [
                            PolpMdSpinnerServiceImpl
                        ]
                    },] }
        ];
        /** @nocollapse */
        PolpMdComponentsModule.ctorParameters = function () {
            return [
                { type: PolpMdComponentsModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
            ];
        };
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

    exports.PolpMdIndicatorModal = PolpMdIndicatorModal;
    exports.PolpMdComponentsModule = PolpMdComponentsModule;
    exports.ɵa = PolpMdSpinnerServiceImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-md-components.umd.js.map