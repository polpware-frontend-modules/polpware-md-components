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
    var PolpMdComponentsModule = /** @class */ (function () {
        function PolpMdComponentsModule() {
        }
        PolpMdComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PolpMdIndicatorModal],
                        imports: [
                            material.MatProgressSpinnerModule
                        ],
                        exports: [PolpMdIndicatorModal]
                    },] }
        ];
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-md-components.umd.js.map