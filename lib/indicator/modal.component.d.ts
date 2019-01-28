import { MatDialogRef } from '@angular/material';
export declare class PolpMdIndicatorModal {
    dialogRef: MatDialogRef<PolpMdIndicatorModal>;
    data: any;
    title: string;
    constructor(dialogRef: MatDialogRef<PolpMdIndicatorModal>, data: any);
    onNoClick(): void;
}
