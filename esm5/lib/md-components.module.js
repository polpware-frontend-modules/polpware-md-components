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
export { PolpMdComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDSCx3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxFQUNILG1CQUFtQixFQUNuQixXQUFXLEVBQ2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFO0lBa0NJLGdDQUFvQyxZQUFvQztRQUNwRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkVBQTJFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7Ozs7SUFYTSw4QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLHNCQUFzQjtTQUNuQyxDQUFDO0lBQ04sQ0FBQzs7Z0JBaENKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFFbkIsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsb0JBQW9CO3dCQUNwQixrQkFBa0I7cUJBQ3JCO29CQUNELGVBQWUsRUFBRTt3QkFDYixvQkFBb0I7d0JBQ3BCLGtCQUFrQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLHdCQUF3QjtxQkFDM0I7aUJBQ0o7Ozs7Z0JBUXFELHNCQUFzQix1QkFBM0QsUUFBUSxZQUFJLFFBQVE7O0lBTXJDLDZCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FiWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLFxuICAgIE9wdGlvbmFsLCBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7XG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRhZ0lucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWNoaXBzJztcblxuaW1wb3J0IHsgUG9scE1kSW5kaWNhdG9yTW9kYWwgfSBmcm9tICcuL2luZGljYXRvci9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbCc7XG5cbmltcG9ydCB7IEVtYWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZW1haWwtZm9ybS9lbWFpbC1mb3JtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBFbWFpbEZvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgVGFnSW5wdXRNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBFbWFpbEZvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQb2xwTWRTcGlubmVyU2VydmljZUltcGxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBNZENvbXBvbmVudHNNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdQb2xwTWRDb21wb25lbnRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=