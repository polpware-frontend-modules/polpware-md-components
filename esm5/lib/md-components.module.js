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
    PolpMdComponentsModule.ctorParameters = function () { return [
        { type: PolpMdComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PolpMdComponentsModule;
}());
export { PolpMdComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbWQtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFO0lBNERJLGdDQUFvQyxZQUFvQztRQUNwRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkVBQTJFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7Ozs7SUFYTSw4QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLHNCQUFzQjtTQUNuQyxDQUFDO0lBQ04sQ0FBQzs7Z0JBMURKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUV0QixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFFbkIsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFFYixjQUFjO3dCQUNkLGNBQWM7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGlCQUFpQjtxQkFDcEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNiLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBRXRCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFFckIsb0JBQW9CO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Asd0JBQXdCO3FCQUMzQjtpQkFDSjs7OztnQkFRcUQsc0JBQXNCLHVCQUEzRCxRQUFRLFlBQUksUUFBUTs7SUFNckMsNkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7XG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRhZ0lucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWNoaXBzJztcblxuaW1wb3J0IHsgQXV0b3NpemVNb2R1bGUgfSBmcm9tICduZ3gtYXV0b3NpemUnO1xuXG5pbXBvcnQgeyBQb2xwTWRJbmRpY2F0b3JNb2RhbCB9IGZyb20gJy4vaW5kaWNhdG9yL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2xwTWRTcGlubmVyU2VydmljZUltcGwgfSBmcm9tICcuL3NlcnZpY2VzL3NwaW5uZXItc2VydmljZS5pbXBsJztcblxuaW1wb3J0IHsgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCB9IGZyb20gJy4vcmFkaW8tZ3JvdXAtZmllbGQvcmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU25hY2tiYXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrYmFySW5mb0NvbXBvbmVudCB9IGZyb20gJy4vc25hY2tiYXIvc25hY2tiYXItaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tiYXJTdWNjZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFja2Jhci9zbmFja2Jhci1zdWNjZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbmFja2Jhcldhcm5Db21wb25lbnQgfSBmcm9tICcuL3NuYWNrYmFyL3NuYWNrYmFyLXdhcm4uY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWZvcm0vbWVzc2FnZS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydEJveENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQb2xwTWRJbmRpY2F0b3JNb2RhbCxcbiAgICAgICAgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCxcbiAgICAgICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcblxuICAgICAgICBTbmFja2JhckVycm9yQ29tcG9uZW50LFxuICAgICAgICBTbmFja2JhckluZm9Db21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFyU3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJXYXJuQ29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlRm9ybUNvbXBvbmVudCxcbiAgICAgICAgQWxlcnRCb3hDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRSYWRpb01vZHVsZSxcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgICAgIE1hdExpc3RNb2R1bGUsXG5cbiAgICAgICAgVGFnSW5wdXRNb2R1bGUsXG4gICAgICAgIEF1dG9zaXplTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBSYWRpb0dyb3VwRmllbGRDb250cm9sLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFBvbHBNZEluZGljYXRvck1vZGFsLFxuICAgICAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuXG4gICAgICAgIFNuYWNrYmFyRXJyb3JDb21wb25lbnQsXG4gICAgICAgIFNuYWNrYmFySW5mb0NvbXBvbmVudCxcbiAgICAgICAgU25hY2tiYXJTdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICBTbmFja2Jhcldhcm5Db21wb25lbnQsXG5cbiAgICAgICAgTWVzc2FnZUZvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQb2xwTWRTcGlubmVyU2VydmljZUltcGxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBNZENvbXBvbmVudHNNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBvbHBNZENvbXBvbmVudHNNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdQb2xwTWRDb21wb25lbnRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=