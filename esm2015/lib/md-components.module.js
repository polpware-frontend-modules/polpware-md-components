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
import { RadioGroupFieldControl } from './radio-group-field/radio-group-field.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackbarErrorComponent } from './snackbar/snackbar-error.component';
import { SnackbarInfoComponent } from './snackbar/snackbar-info.component';
import { SnackbarSuccessComponent } from './snackbar/snackbar-success.component';
import { SnackbarWarnComponent } from './snackbar/snackbar-warn.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
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
                    RadioGroupFieldControl,
                    UploadFileComponent,
                    ConfirmDialogComponent,
                    SnackbarErrorComponent,
                    SnackbarInfoComponent,
                    SnackbarSuccessComponent,
                    SnackbarWarnComponent,
                    MessageFormComponent,
                    AlertBoxComponent
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
                    RadioGroupFieldControl,
                    UploadFileComponent,
                    ConfirmDialogComponent,
                    AlertBoxComponent
                ],
                entryComponents: [
                    PolpMdIndicatorModal,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBdURwRSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTy9CLFlBQW9DLFlBQW9DO1FBQ3BFLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwyRUFBMkUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNOLENBQUM7OztZQTFESixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFFdEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFDeEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBRWIsY0FBYztvQkFDZCxjQUFjO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixpQkFBaUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBRXJCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLHdCQUF3QjtpQkFDM0I7YUFDSjs7OztZQVFxRCxzQkFBc0IsdUJBQTNELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSxcbiAgICBPcHRpb25hbCwgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBBdXRvc2l6ZU1vZHVsZSB9IGZyb20gJ25neC1hdXRvc2l6ZSc7XG5cbmltcG9ydCB7IFBvbHBNZEluZGljYXRvck1vZGFsIH0gZnJvbSAnLi9pbmRpY2F0b3IvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vc2VydmljZXMvc3Bpbm5lci1zZXJ2aWNlLmltcGwnO1xuXG5pbXBvcnQgeyBSYWRpb0dyb3VwRmllbGRDb250cm9sIH0gZnJvbSAnLi9yYWRpby1ncm91cC1maWVsZC9yYWRpby1ncm91cC1maWVsZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTbmFja2JhckVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tiYXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja2JhclN1Y2Nlc3NDb21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLXN1Y2Nlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrYmFyV2FybkNvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItd2Fybi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtZm9ybS9tZXNzYWdlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBSYWRpb0dyb3VwRmllbGRDb250cm9sLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuXG4gICAgICAgIFNuYWNrYmFyRXJyb3JDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFySW5mb0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJTdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICBTbmFja2Jhcldhcm5Db21wb25lbnQsXG4gICAgICAgIE1lc3NhZ2VGb3JtQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcblxuICAgICAgICBUYWdJbnB1dE1vZHVsZSxcbiAgICAgICAgQXV0b3NpemVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIFJhZGlvR3JvdXBGaWVsZENvbnRyb2wsXG4gICAgICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUG9scE1kSW5kaWNhdG9yTW9kYWwsXG4gICAgICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG5cbiAgICAgICAgU25hY2tiYXJFcnJvckNvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJJbmZvQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhclN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyV2FybkNvbXBvbmVudCxcblxuICAgICAgICBNZXNzYWdlRm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvbHBNZFNwaW5uZXJTZXJ2aWNlSW1wbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scE1kQ29tcG9uZW50c01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE1kQ29tcG9uZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBNZENvbXBvbmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==