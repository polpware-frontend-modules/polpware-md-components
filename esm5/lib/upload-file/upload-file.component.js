/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpEventType } from '@angular/common/http';
import { guid } from '@polpware/fe-utilities';
/**
 * @record
 */
export function IUploadFileInput() { }
if (false) {
    /** @type {?} */
    IUploadFileInput.prototype.title;
    /** @type {?} */
    IUploadFileInput.prototype.prelude;
    /** @type {?} */
    IUploadFileInput.prototype.uploadService;
    /** @type {?} */
    IUploadFileInput.prototype.uploadUrl;
    /**
     * File extension that accepted, same as 'accept' of <input type="file" />.
     * By the default, it's set to 'image/*'.
     * @type {?}
     */
    IUploadFileInput.prototype.accept;
    /** @type {?} */
    IUploadFileInput.prototype.progressMode;
    /** @type {?} */
    IUploadFileInput.prototype.makeFormData;
    /** @type {?} */
    IUploadFileInput.prototype.validateInput;
    /** @type {?} */
    IUploadFileInput.prototype.closeOnSunccess;
}
var FileUploadModel = /** @class */ (function () {
    function FileUploadModel() {
    }
    return FileUploadModel;
}());
if (false) {
    /** @type {?} */
    FileUploadModel.prototype.uuid;
    /** @type {?} */
    FileUploadModel.prototype.data;
    /** @type {?} */
    FileUploadModel.prototype.state;
    /** @type {?} */
    FileUploadModel.prototype.inProgress;
    /** @type {?} */
    FileUploadModel.prototype.progress;
    /** @type {?} */
    FileUploadModel.prototype.canRetry;
    /** @type {?} */
    FileUploadModel.prototype.canCancel;
    /** @type {?} */
    FileUploadModel.prototype.message;
    /** @type {?} */
    FileUploadModel.prototype.sub;
}
var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
        this.responses = [];
        this.title = this.data.title || '';
        this.accept = this.data.accept || '*/';
        this.text = this.data.prelude || '';
        this.mode = this.data.progressMode || 'indeterminate';
    }
    Object.defineProperty(UploadFileComponent.prototype, "isCloseDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.files.some(function (x) { return x.inProgress; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(this.responses);
    };
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploadFileComponent.prototype.startUpload = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.onchange = function () {
            // Validate inputs
            /** @type {?} */
            var message = _this.data.validateInput(fileUpload.files);
            if (message) {
                _this.error = message;
                return;
            }
            for (var index = 0; index < fileUpload.files.length; index++) {
                /** @type {?} */
                var file = fileUpload.files[index];
                _this.files.push({
                    uuid: guid(),
                    data: file,
                    state: 'in',
                    inProgress: false,
                    progress: 0,
                    canRetry: false,
                    canCancel: true,
                    message: ''
                });
            }
            _this.uploadFiles();
        };
        fileUpload.click();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.cancelFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.retryFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.uploadFile(file);
        file.canRetry = false;
    };
    /**
     * @private
     * @param {?} file
     * @param {?} body
     * @return {?}
     */
    UploadFileComponent.prototype.postUploadFile = /**
     * @private
     * @param {?} file
     * @param {?} body
     * @return {?}
     */
    function (file, body) {
        var _this = this;
        this.responses.push({
            uuid: file.uuid,
            body: body
        });
        // If this is the last one file which has been uploaded
        if (this.data.closeOnSunccess) {
            if (this.files.length === this.responses.length) {
                // Schedule to close
                setTimeout(function () {
                    _this.close();
                });
            }
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.uploadFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        file.inProgress = true;
        file.sub = this.data.uploadService.upload(file.data, this.data.uploadUrl, this.data.makeFormData)
            .subscribe(function (value) {
            switch (value.eventType) {
                case HttpEventType.UploadProgress:
                    file.progress = value.percent;
                    break;
                case HttpEventType.Response:
                    file.message = 'Upload Ok.';
                    file.inProgress = false;
                    file.canCancel = false;
                    file.canRetry = false;
                    _this.postUploadFile(file, value.body);
                    break;
            }
        }, function (error) {
            file.inProgress = false;
            file.canRetry = true;
            file.message = "upload failure.";
        });
    };
    /**
     * @private
     * @return {?}
     */
    UploadFileComponent.prototype.uploadFiles = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fileUpload = (/** @type {?} */ (document.getElementById('polpFileUpload')));
        fileUpload.value = '';
        this.files.forEach(function (file) {
            _this.uploadFile(file);
        });
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadFileComponent.prototype.removeFileFromArray = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    };
    UploadFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plop-upload-file',
                    template: "<h2 mat-dialog-title>\n    {{title}}\n    <button class=\"float-right\"\n            mat-icon-button\n            tabIndex=\"-1\"\n            [disabled]=\"isCloseDisabled\"            \n            [mat-dialog-close]=\"true\">\n        <mat-icon>close</mat-icon>\n    </button>\n</h2>\n\n<mat-dialog-content>\n\n    <div class=\"flex-box flex-column\">\n\n        <button mat-flat-button color=\"accent\" (click)=\"startUpload()\">\n            <mat-icon>file_upload</mat-icon>\n            {{text}}\n        </button>\n\n        <p *ngIf=\"error\" color=\"warn\">{{error}}</p>\n        \n        <mat-list>\n            <mat-list-item *ngFor=\"let file of files\">\n                <mat-progress-bar matLine *ngIf=\"file.inProgress\"\n                                  [value]=\"file.progress\" mode=\"{{mode}}\">\n                </mat-progress-bar>\n                <div matLine>\n                    <span>\n                        {{file.data.name}}\n                    </span>\n                    \n                    <span>\n                        {{file.data.message}}\n                    </span>\n                    \n                    <button mat-icon-button title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n                        <mat-icon>refresh</mat-icon>\n                    </button>\n                    <button mat-icon-button title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>\n            </mat-list-item>\n        </mat-list>\n\n    </div>    \n    \n    <input type=\"file\" id=\"polpFileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\"/>\n    \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-flat-button\n            [disabled]=\"isCloseDisabled\"\n            (click)=\"close()\">\n        Close\n    </button>\n</mat-dialog-actions>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UploadFileComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return UploadFileComponent;
}());
export { UploadFileComponent };
if (false) {
    /** @type {?} */
    UploadFileComponent.prototype.title;
    /** @type {?} */
    UploadFileComponent.prototype.text;
    /** @type {?} */
    UploadFileComponent.prototype.accept;
    /** @type {?} */
    UploadFileComponent.prototype.mode;
    /** @type {?} */
    UploadFileComponent.prototype.error;
    /** @type {?} */
    UploadFileComponent.prototype.files;
    /**
     * @type {?}
     * @private
     */
    UploadFileComponent.prototype.responses;
    /** @type {?} */
    UploadFileComponent.prototype.dialogRef;
    /** @type {?} */
    UploadFileComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWEsWUFBWSxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHckQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTlDLHNDQWFDOzs7SUFaRyxpQ0FBYzs7SUFDZCxtQ0FBZ0I7O0lBQ2hCLHlDQUFrQzs7SUFDbEMscUNBQWtCOzs7Ozs7SUFJbEIsa0NBQWU7O0lBQ2Ysd0NBQThDOztJQUM5Qyx3Q0FBdUM7O0lBQ3ZDLHlDQUEyQzs7SUFDM0MsMkNBQXlCOztBQUc3QjtJQUFBO0lBVUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7OztJQVRHLCtCQUFhOztJQUNiLCtCQUFXOztJQUNYLGdDQUFjOztJQUNkLHFDQUFvQjs7SUFDcEIsbUNBQWlCOztJQUNqQixtQ0FBa0I7O0lBQ2xCLG9DQUFtQjs7SUFDbkIsa0NBQWdCOztJQUNoQiw4QkFBbUI7O0FBR3ZCO0lBZ0JJLDZCQUE0QixTQUE0QyxFQUMzQixJQUFzQjtRQUR2QyxjQUFTLEdBQVQsU0FBUyxDQUFtQztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUpuRSxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQWUsRUFBRSxDQUFDO1FBSy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUks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QUFDLEVBQW9CO1FBQ2hGLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8saURBQW1COzs7OztJQUEzQixVQUE0QixJQUFxQjs7WUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7O2dCQW5JSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNDhEQUEyQzs7aUJBRTlDOzs7O2dCQXhDbUIsWUFBWTtnREFxRHZCLE1BQU0sU0FBQyxlQUFlOztJQW9IL0IsMEJBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQWhJWSxtQkFBbUI7OztJQUU1QixvQ0FBYzs7SUFDZCxtQ0FBYTs7SUFDYixxQ0FBZTs7SUFDZixtQ0FBYTs7SUFDYixvQ0FBYzs7SUFFZCxvQ0FBbUM7Ozs7O0lBQ25DLHdDQUFtQzs7SUFFdkIsd0NBQTREOztJQUNwRSxtQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgSHR0cEV2ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBndWlkIH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5cbmltcG9ydCB7IElVcGxvYWRGaWxlU2VydmljZSB9IGZyb20gJy4vdXBsb2FkLWZpbGUuaW50ZXJmYWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkRmlsZUlucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByZWx1ZGU6IHN0cmluZztcbiAgICB1cGxvYWRTZXJ2aWNlOiBJVXBsb2FkRmlsZVNlcnZpY2U7XG4gICAgdXBsb2FkVXJsOiBzdHJpbmc7XG4gICAgLyoqIEZpbGUgZXh0ZW5zaW9uIHRoYXQgYWNjZXB0ZWQsIHNhbWUgYXMgJ2FjY2VwdCcgb2YgPGlucHV0IHR5cGU9XCJmaWxlXCIgLz4uIFxuICAgICAgICAgICAgIEJ5IHRoZSBkZWZhdWx0LCBpdCdzIHNldCB0byAnaW1hZ2UvKicuXG4gICAgKi9cbiAgICBhY2NlcHQ6IHN0cmluZztcbiAgICBwcm9ncmVzc01vZGU6ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgbWFrZUZvcm1EYXRhOiAoZmlsZTogRmlsZSkgPT4gRm9ybURhdGE7XG4gICAgdmFsaWRhdGVJbnB1dDogKGZpbGVzOiBGaWxlTGlzdCkgPT4gc3RyaW5nO1xuICAgIGNsb3NlT25TdW5jY2VzczogYm9vbGVhbjtcbn1cblxuY2xhc3MgRmlsZVVwbG9hZE1vZGVsIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgZGF0YTogRmlsZTtcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIGluUHJvZ3Jlc3M6IGJvb2xlYW47XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgICBjYW5SZXRyeTogYm9vbGVhbjtcbiAgICBjYW5DYW5jZWw6IGJvb2xlYW47XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN1Yj86IFN1YnNjcmlwdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwbG9wLXVwbG9hZC1maWxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBhY2NlcHQ6IHN0cmluZztcbiAgICBtb2RlOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcblxuICAgIGZpbGVzOiBBcnJheTxGaWxlVXBsb2FkTW9kZWw+ID0gW107XG4gICAgcHJpdmF0ZSByZXNwb25zZXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxVcGxvYWRGaWxlQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyByZWFkb25seSBkYXRhOiBJVXBsb2FkRmlsZUlucHV0KSB7XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSB8fCAnJztcbiAgICAgICAgdGhpcy5hY2NlcHQgPSB0aGlzLmRhdGEuYWNjZXB0IHx8ICcqLyc7XG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZGF0YS5wcmVsdWRlIHx8ICcnO1xuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLmRhdGEucHJvZ3Jlc3NNb2RlIHx8ICdpbmRldGVybWluYXRlJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzQ2xvc2VEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuc29tZSh4ID0+IHguaW5Qcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMucmVzcG9uc2VzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBzdGFydFVwbG9hZCgpIHtcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2xwRmlsZVVwbG9hZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGZpbGVVcGxvYWQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmRhdGEudmFsaWRhdGVJbnB1dChmaWxlVXBsb2FkLmZpbGVzKTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZVVwbG9hZC5maWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZVVwbG9hZC5maWxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogZ3VpZCgpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJ2luJyxcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgICAgICBjYW5SZXRyeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbkNhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVVwbG9hZC5jbGljaygpO1xuICAgIH1cblxuICAgIGNhbmNlbEZpbGUoZmlsZTogRmlsZVVwbG9hZE1vZGVsKSB7XG4gICAgICAgIGZpbGUuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZUZyb21BcnJheShmaWxlKTtcbiAgICB9XG5cbiAgICByZXRyeUZpbGUoZmlsZTogRmlsZVVwbG9hZE1vZGVsKSB7XG4gICAgICAgIHRoaXMudXBsb2FkRmlsZShmaWxlKTtcbiAgICAgICAgZmlsZS5jYW5SZXRyeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9zdFVwbG9hZEZpbGUoZmlsZTogRmlsZVVwbG9hZE1vZGVsLCBib2R5OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZXMucHVzaCh7XG4gICAgICAgICAgICB1dWlkOiBmaWxlLnV1aWQsXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGxhc3Qgb25lIGZpbGUgd2hpY2ggaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uU3VuY2Nlc3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PT0gdGhpcy5yZXNwb25zZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gU2NoZWR1bGUgdG8gY2xvc2VcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGxvYWRGaWxlKGZpbGU6IEZpbGVVcGxvYWRNb2RlbCkge1xuICAgICAgICBmaWxlLmluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBmaWxlLnN1YiA9IHRoaXMuZGF0YS51cGxvYWRTZXJ2aWNlLnVwbG9hZChmaWxlLmRhdGEsXG4gICAgICAgICAgICB0aGlzLmRhdGEudXBsb2FkVXJsLCB0aGlzLmRhdGEubWFrZUZvcm1EYXRhKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnByb2dyZXNzID0gdmFsdWUucGVyY2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm1lc3NhZ2UgPSAnVXBsb2FkIE9rLic7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuY2FuQ2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmNhblJldHJ5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdFVwbG9hZEZpbGUoZmlsZSwgdmFsdWUuYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGUuaW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpbGUuY2FuUmV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZpbGUubWVzc2FnZSA9IGB1cGxvYWQgZmFpbHVyZS5gO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGxvYWRGaWxlcygpIHtcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2xwRmlsZVVwbG9hZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGZpbGVVcGxvYWQudmFsdWUgPSAnJztcblxuICAgICAgICB0aGlzLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRmlsZUZyb21BcnJheShmaWxlOiBGaWxlVXBsb2FkTW9kZWwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmluZGV4T2YoZmlsZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0gICAgXG4iXX0=