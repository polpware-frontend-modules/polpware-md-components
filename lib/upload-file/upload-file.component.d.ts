import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { IUploadFileService } from './upload-file.interface';
export interface IUploadFileInput {
    title: string;
    prelude: string;
    uploadService: IUploadFileService;
    uploadUrl: string;
    /** File extension that accepted, same as 'accept' of <input type="file" />.
             By the default, it's set to 'image/*'.
    */
    accept: string;
    progressMode: 'determinate' | 'indeterminate';
    makeFormData: (file: File) => FormData;
    validateInput: (files: FileList) => string;
    closeOnSunccess: boolean;
}
declare class FileUploadModel {
    uuid: string;
    data: File;
    state: string;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;
    message: string;
    sub?: Subscription;
}
export declare class UploadFileComponent implements OnInit {
    readonly dialogRef: MatDialogRef<UploadFileComponent>;
    readonly data: IUploadFileInput;
    title: string;
    text: string;
    accept: string;
    mode: string;
    error: string;
    files: Array<FileUploadModel>;
    private responses;
    constructor(dialogRef: MatDialogRef<UploadFileComponent>, data: IUploadFileInput);
    readonly isCloseDisabled: boolean;
    close(): void;
    ngOnInit(): void;
    startUpload(): void;
    cancelFile(file: FileUploadModel): void;
    retryFile(file: FileUploadModel): void;
    private postUploadFile;
    private uploadFile;
    private uploadFiles;
    private removeFileFromArray;
}
export {};
