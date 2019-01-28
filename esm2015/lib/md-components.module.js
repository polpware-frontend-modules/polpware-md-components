/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { PolpMdIndicatorModal } from './indicator/modal.component';
import { PolpMdSpinnerServiceImpl } from './services/spinner-service.impl';
export class PolpMdComponentsModule {
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
PolpMdComponentsModule.ctorParameters = () => [
    { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZTNFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFPL0IsWUFBb0MsWUFBb0M7UUFDcEUsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNYLDJFQUEyRSxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDOzs7O0lBWEQsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLHNCQUFzQjtTQUNuQyxDQUFDO0lBQ04sQ0FBQzs7O1lBbEJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNMLHdCQUF3QjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLGVBQWUsRUFBRTtvQkFDYixvQkFBb0I7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCx3QkFBd0I7aUJBQzNCO2FBQ0o7Ozs7WUFRcUQsc0JBQXNCLHVCQUEzRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IFBvbHBNZEluZGljYXRvck1vZGFsIH0gZnJvbSAnLi9pbmRpY2F0b3IvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vc2VydmljZXMvc3Bpbm5lci1zZXJ2aWNlLmltcGwnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1BvbHBNZEluZGljYXRvck1vZGFsXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1BvbHBNZEluZGljYXRvck1vZGFsXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQb2xwTWRTcGlubmVyU2VydmljZUltcGxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBNZENvbXBvbmVudHNNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdQb2xwTWRDb21wb25lbnRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=