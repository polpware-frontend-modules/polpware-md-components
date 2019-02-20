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
import { MessageFormComponent } from './message-form/message-form.component';
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
                    SnackbarWarnComponent,
                    MessageFormComponent
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
                    SnackbarWarnComponent,
                    MessageFormComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBd0Q3RSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTy9CLFlBQW9DLFlBQW9DO1FBQ3BFLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwyRUFBMkUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNOLENBQUM7OztZQTNESixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBRWIsY0FBYztvQkFDZCxjQUFjO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixzQkFBc0I7aUJBQ3pCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBRXRCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFFckIsb0JBQW9CO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Asd0JBQXdCO2lCQUMzQjthQUNKOzs7O1lBUXFELHNCQUFzQix1QkFBM0QsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLFxuICAgIE9wdGlvbmFsLCBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQge1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUYWdJbnB1dE1vZHVsZSB9IGZyb20gJ25neC1jaGlwcyc7XG5cbmltcG9ydCB7IEF1dG9zaXplTW9kdWxlIH0gZnJvbSAnbmd4LWF1dG9zaXplJztcblxuaW1wb3J0IHsgUG9scE1kSW5kaWNhdG9yTW9kYWwgfSBmcm9tICcuL2luZGljYXRvci9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9zZXJ2aWNlcy9zcGlubmVyLXNlcnZpY2UuaW1wbCc7XG5cbmltcG9ydCB7IEVtYWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZW1haWwtZm9ybS9lbWFpbC1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJhZGlvR3JvdXBGaWVsZENvbnRyb2wgfSBmcm9tICcuL3JhZGlvLWdyb3VwLWZpZWxkL3JhZGlvLWdyb3VwLWZpZWxkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVwbG9hZEZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNuYWNrYmFyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja2JhckluZm9Db21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLWluZm8uY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItc3VjY2Vzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tiYXJXYXJuQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci13YXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1mb3JtL21lc3NhZ2UtZm9ybS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbCxcbiAgICAgICAgRW1haWxGb3JtQ29tcG9uZW50LFxuICAgICAgICBSYWRpb0dyb3VwRmllbGRDb250cm9sLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuXG4gICAgICAgIFNuYWNrYmFyRXJyb3JDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFySW5mb0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJTdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICBTbmFja2Jhcldhcm5Db21wb25lbnQsXG4gICAgICAgIE1lc3NhZ2VGb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuXG4gICAgICAgIFRhZ0lucHV0TW9kdWxlLFxuICAgICAgICBBdXRvc2l6ZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbCxcbiAgICAgICAgRW1haWxGb3JtQ29tcG9uZW50LFxuICAgICAgICBSYWRpb0dyb3VwRmllbGRDb250cm9sLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIEVtYWlsRm9ybUNvbXBvbmVudCxcbiAgICAgICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcblxuICAgICAgICBTbmFja2JhckVycm9yQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhckluZm9Db21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJXYXJuQ29tcG9uZW50LFxuXG4gICAgICAgIE1lc3NhZ2VGb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUG9scE1kU3Bpbm5lclNlcnZpY2VJbXBsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwTWRDb21wb25lbnRzTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBQb2xwTWRDb21wb25lbnRzTW9kdWxlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQb2xwTWRDb21wb25lbnRzTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnUG9scE1kQ29tcG9uZW50c01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19