import { OnInit, OnDestroy } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { MatFormFieldControl, MatRadioGroup } from "@angular/material";
import { Subject } from 'rxjs';
export declare class RadioGroupFieldControl implements MatFormFieldControl<any>, OnInit, OnDestroy, ControlValueAccessor {
    radioGroup: MatRadioGroup;
    stateChanges: Subject<void>;
    static nextId: number;
    id: string;
    focused: boolean;
    errorState: boolean;
    controlType: string;
    describedBy: string;
    radioOptions: Array<{
        value: any;
        text: string;
    }>;
    ngControl: NgControl;
    constructor();
    value: any;
    placeholder: string;
    private _placeholder;
    readonly empty: boolean;
    readonly shouldLabelFloat: boolean;
    required: boolean;
    disabled: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
