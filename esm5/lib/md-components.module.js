/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule, MatProgressBarModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AutosizeModule } from 'ngx-autosize';
import { PolpMdIndicatorModal } from './indicator/modal.component';
import { PolpMdSpinnerServiceImpl } from './services/spinner-service.impl';
import { EmailFormComponent } from './email-form/email-form.component';
import { RadioGroupFieldControl } from './radio-group-field/radio-group-field.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackbarErrorComponent } from './snackbar/snackbar-error.component';
import { SnackbarInfoComponent } from './snackbar/snackbar-info.component';
import { SnackbarSuccessComponent } from './snackbar/snackbar-success.component';
import { SnackbarWarnComponent } from './snackbar/snackbar-warn.component';
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
                        EmailFormComponent,
                        RadioGroupFieldControl,
                        UploadFileComponent,
                        ConfirmDialogComponent,
                        SnackbarErrorComponent,
                        SnackbarInfoComponent,
                        SnackbarSuccessComponent,
                        SnackbarWarnComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatProgressSpinnerModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        MatRadioModule,
                        MatProgressBarModule,
                        MatListModule,
                        TagInputModule,
                        AutosizeModule
                    ],
                    exports: [
                        PolpMdIndicatorModal,
                        EmailFormComponent,
                        RadioGroupFieldControl,
                        UploadFileComponent,
                        ConfirmDialogComponent
                    ],
                    entryComponents: [
                        PolpMdIndicatorModal,
                        EmailFormComponent,
                        UploadFileComponent,
                        ConfirmDialogComponent,
                        SnackbarErrorComponent,
                        SnackbarInfoComponent,
                        SnackbarSuccessComponent,
                        SnackbarWarnComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTNFO0lBMERJLGdDQUFvQyxZQUFvQztRQUNwRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkVBQTJFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7Ozs7SUFYTSw4QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLHNCQUFzQjtTQUNuQyxDQUFDO0lBQ04sQ0FBQzs7Z0JBeERKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBRXRCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHFCQUFxQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBRW5CLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBRWIsY0FBYzt3QkFDZCxjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7cUJBQ3pCO29CQUNELGVBQWUsRUFBRTt3QkFDYixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBRXRCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHFCQUFxQjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLHdCQUF3QjtxQkFDM0I7aUJBQ0o7Ozs7Z0JBUXFELHNCQUFzQix1QkFBM0QsUUFBUSxZQUFJLFFBQVE7O0lBTXJDLDZCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FiWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLFxuICAgIE9wdGlvbmFsLCBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQge1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUYWdJbnB1dE1vZHVsZSB9IGZyb20gJ25neC1jaGlwcyc7XG5cbmltcG9ydCB7IEF1dG9zaXplTW9kdWxlIH0gZnJvbSAnbmd4LWF1dG9zaXplJztcblxuaW1wb3J0IHsgUG9scE1kSW5kaWNhdG9yTW9kYWwgfSBmcm9tICcuL2luZGljYXRvci9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbCc7XG5cbmltcG9ydCB7IEVtYWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZW1haWwtZm9ybS9lbWFpbC1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJhZGlvR3JvdXBGaWVsZENvbnRyb2wgfSBmcm9tICcuL3JhZGlvLWdyb3VwLWZpZWxkL3JhZGlvLWdyb3VwLWZpZWxkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVwbG9hZEZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNuYWNrYmFyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja2JhckluZm9Db21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLWluZm8uY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItc3VjY2Vzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tiYXJXYXJuQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci13YXJuLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBFbWFpbEZvcm1Db21wb25lbnQsXG4gICAgICAgIFJhZGlvR3JvdXBGaWVsZENvbnRyb2wsXG4gICAgICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG5cbiAgICAgICAgU25hY2tiYXJFcnJvckNvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJJbmZvQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhclN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyV2FybkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcblxuICAgICAgICBUYWdJbnB1dE1vZHVsZSxcbiAgICAgICAgQXV0b3NpemVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudCxcbiAgICAgICAgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCxcbiAgICAgICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBFbWFpbEZvcm1Db21wb25lbnQsXG4gICAgICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG5cbiAgICAgICAgU25hY2tiYXJFcnJvckNvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJJbmZvQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhclN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyV2FybkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scE1kQ29tcG9uZW50c01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBNZENvbXBvbmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==