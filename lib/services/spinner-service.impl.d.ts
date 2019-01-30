import { MatDialog } from '@angular/material';
import { ISpinnerService } from '@polpware/ngx-spinner';
export declare class PolpMdSpinnerServiceImpl implements ISpinnerService {
    private _dialog;
    private _diaglogRef;
    private _showingTimer;
    private _showingDelay;
    private _dismissingTimer;
    private _counter;
    constructor(_dialog: MatDialog);
    setDelay(seconds: number): void;
    show(title?: string): void;
    hide(): void;
}
