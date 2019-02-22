import { OnInit } from '@angular/core';
export declare enum AlertTypeEnum {
    none = 0,
    info = 1,
    warning = 2,
    running = 3,
    success = 4,
    error = 5
}
export declare class AlertBoxComponent implements OnInit {
    kind: AlertTypeEnum;
    message: string;
    subMessage: string;
    dismissible: boolean;
    constructor();
    ngOnInit(): void;
    dismiss(): void;
}
