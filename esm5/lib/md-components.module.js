/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { PolpMdIndicatorModal } from './indicator/modal.component';
import { PolpMdSpinnerServiceImpl } from './services/spinner-service.impl';
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
                    declarations: [PolpMdIndicatorModal],
                    imports: [
                        MatProgressSpinnerModule
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
    PolpMdComponentsModule.ctorParameters = function () { return [
        { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PolpMdComponentsModule;
}());
export { PolpMdComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFO0lBb0JJLGdDQUFvQyxZQUFvQztRQUNwRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkVBQTJFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7Ozs7SUFYTSw4QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLHNCQUFzQjtTQUNuQyxDQUFDO0lBQ04sQ0FBQzs7Z0JBbEJKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNMLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLGVBQWUsRUFBRTt3QkFDYixvQkFBb0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDUCx3QkFBd0I7cUJBQzNCO2lCQUNKOzs7O2dCQVFxRCxzQkFBc0IsdUJBQTNELFFBQVEsWUFBSSxRQUFROztJQU1yQyw2QkFBQztDQUFBLEFBMUJELElBMEJDO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSxcbiAgICBPcHRpb25hbCwgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgUG9scE1kSW5kaWNhdG9yTW9kYWwgfSBmcm9tICcuL2luZGljYXRvci9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUG9scE1kSW5kaWNhdG9yTW9kYWxdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUG9scE1kSW5kaWNhdG9yTW9kYWxdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scE1kQ29tcG9uZW50c01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBNZENvbXBvbmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==