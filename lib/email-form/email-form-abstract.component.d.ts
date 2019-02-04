import { ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TagInputComponent } from 'ngx-chips';
declare function isValidEmail(control: any): {
    'isValidEmail': boolean;
};
export declare function parseEmails(addr_list: any): any[];
export declare function parseOnlyEmails(addr_list: any): any[];
export declare abstract class EmailFormAbstractComponent {
    dialogRef: MatDialogRef<EmailFormAbstractComponent>;
    emailInputBox: TagInputComponent;
    emailBody: ElementRef;
    title: string;
    messageBody: string;
    emails: Array<any>;
    validators: (typeof isValidEmail)[];
    errorMessages: {
        'isValidEmail': string;
    };
    private disableFocusEvent;
    constructor(dialogRef: MatDialogRef<EmailFormAbstractComponent>);
    readonly isSubmitDisabled: boolean;
    abstract onSubmit(): any;
    onOutOfTagInput(evt: any): void;
}
export {};
