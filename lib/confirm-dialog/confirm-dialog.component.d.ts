import { OnInit } from '@angular/core';
export interface IConfirmDialogData {
    title: string;
    message: string;
}
export declare class ConfirmDialogComponent implements OnInit {
    data: IConfirmDialogData;
    constructor(data: IConfirmDialogData);
    ngOnInit(): void;
}
