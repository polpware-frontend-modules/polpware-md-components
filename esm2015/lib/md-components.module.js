/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatIconModule, } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { PolpMdIndicatorModal } from './indicator/modal.component';
import { PolpMdSpinnerServiceImpl } from './services/spinner-service.impl';
import { EmailFormComponent } from './email-form/email-form.component';
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
PolpMdComponentsModule.ctorParameters = () => [
    { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDSCx3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxFQUNILG1CQUFtQixFQUNuQixXQUFXLEVBQ2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBNkJ2RSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTy9CLFlBQW9DLFlBQW9DO1FBQ3BFLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwyRUFBMkUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNOLENBQUM7OztZQWhDSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNyQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2Isb0JBQW9CO29CQUNwQixrQkFBa0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCx3QkFBd0I7aUJBQzNCO2FBQ0o7Ozs7WUFRcUQsc0JBQXNCLHVCQUEzRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBQb2xwTWRJbmRpY2F0b3JNb2RhbCB9IGZyb20gJy4vaW5kaWNhdG9yL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2xwTWRTcGlubmVyU2VydmljZUltcGwgfSBmcm9tICcuL3NlcnZpY2VzL3NwaW5uZXItc2VydmljZS5pbXBsJztcblxuaW1wb3J0IHsgRW1haWxGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBUYWdJbnB1dE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbCxcbiAgICAgICAgRW1haWxGb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scE1kQ29tcG9uZW50c01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBNZENvbXBvbmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==