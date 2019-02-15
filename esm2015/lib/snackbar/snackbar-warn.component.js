/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
export class SnackbarWarnComponent {
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
if (false) {
    /** @type {?} */
    SnackbarWarnComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXItd2Fybi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zbmFja2Jhci9zbmFja2Jhci13YXJuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXdkQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUM5QixZQUErQyxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7OztZQVZoRSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs4QkFFZ0I7eUJBRXRCLHVEQUF1RDthQUU5RDs7Ozs0Q0FFZ0IsTUFBTSxTQUFDLGtCQUFrQjs7OztJQUExQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtc25hY2tiYXItd2FybicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPndhcm5pbmc8L2k+XG4gICAgICAgIDxzcGFuPnt7ZGF0YX19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgICc6aG9zdCB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9ICdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyV2FybkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxufVxuIl19