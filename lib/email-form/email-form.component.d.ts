import { MatDialogRef } from '@angular/material';
import { EmailFormAbstractComponent } from './email-form-abstract.component';
export interface IEmailFormDefaultInput {
    emailBody: string;
    emailTitle: string;
}
export interface IEmailFormDefaultOutput {
    confirmed: boolean;
    emailReceivers: string[];
    emailBody: string;
    emailTitle: string;
}
export declare class EmailFormComponent extends EmailFormAbstractComponent {
    dialogRef: MatDialogRef<EmailFormComponent>;
    data: IEmailFormDefaultInput;
    constructor(dialogRef: MatDialogRef<EmailFormComponent>, data: IEmailFormDefaultInput);
    readonly isSubmitDisabled: boolean;
    onSubmit(): void;
}
