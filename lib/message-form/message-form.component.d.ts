import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export interface IMessageFormInput {
    title: string;
    message: string;
}
export interface IMessageFormExport {
    confirmed: boolean;
    message: string;
}
export declare class MessageFormComponent implements OnInit {
    dialogRef: MatDialogRef<MessageFormComponent>;
    data: IMessageFormInput;
    title: string;
    messageBody: string;
    constructor(dialogRef: MatDialogRef<MessageFormComponent>, data: IMessageFormInput);
    readonly isSubmitDisabled: boolean;
    ngOnInit(): void;
    close(): void;
    confirm(): void;
}
