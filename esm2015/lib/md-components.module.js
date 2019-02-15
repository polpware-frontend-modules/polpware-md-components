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
PolpMdComponentsModule.ctorParameters = () => [
    { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBcUQzRSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTy9CLFlBQW9DLFlBQW9DO1FBQ3BFLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwyRUFBMkUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNOLENBQUM7OztZQXhESixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixxQkFBcUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUVuQix3QkFBd0I7b0JBQ3hCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixhQUFhO29CQUViLGNBQWM7b0JBQ2QsY0FBYztpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2Isb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixxQkFBcUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCx3QkFBd0I7aUJBQzNCO2FBQ0o7Ozs7WUFRcUQsc0JBQXNCLHVCQUEzRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7XG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRhZ0lucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWNoaXBzJztcblxuaW1wb3J0IHsgQXV0b3NpemVNb2R1bGUgfSBmcm9tICduZ3gtYXV0b3NpemUnO1xuXG5pbXBvcnQgeyBQb2xwTWRJbmRpY2F0b3JNb2RhbCB9IGZyb20gJy4vaW5kaWNhdG9yL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2xwTWRTcGlubmVyU2VydmljZUltcGwgfSBmcm9tICcuL3NlcnZpY2VzL3NwaW5uZXItc2VydmljZS5pbXBsJztcblxuaW1wb3J0IHsgRW1haWxGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCB9IGZyb20gJy4vcmFkaW8tZ3JvdXAtZmllbGQvcmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU25hY2tiYXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrYmFySW5mb0NvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tiYXJTdWNjZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci1zdWNjZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja2Jhcldhcm5Db21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLXdhcm4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudCxcbiAgICAgICAgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCxcbiAgICAgICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcblxuICAgICAgICBTbmFja2JhckVycm9yQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhckluZm9Db21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJXYXJuQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuXG4gICAgICAgIFRhZ0lucHV0TW9kdWxlLFxuICAgICAgICBBdXRvc2l6ZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbCxcbiAgICAgICAgRW1haWxGb3JtQ29tcG9uZW50LFxuICAgICAgICBSYWRpb0dyb3VwRmllbGRDb250cm9sLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudCxcbiAgICAgICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcblxuICAgICAgICBTbmFja2JhckVycm9yQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhckluZm9Db21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJXYXJuQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwTWRDb21wb25lbnRzTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBQb2xwTWRDb21wb25lbnRzTW9kdWxlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQb2xwTWRDb21wb25lbnRzTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnUG9scE1kQ29tcG9uZW50c01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19