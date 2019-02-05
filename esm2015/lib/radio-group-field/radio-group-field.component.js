/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostBinding, Input, Component, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldControl, MatRadioGroup } from "@angular/material";
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
export class RadioGroupFieldControl {
    constructor() {
        // Value
        this.stateChanges = new Subject();
        this.id = `radio-group-field-control-${RadioGroupFieldControl.nextId++}`;
        // Focused 
        this.focused = false;
        // Error state
        this.errorState = false;
        // control type
        this.controlType = 'radio-group-field';
        // Described 
        this.describedBy = '';
        this.ngControl = null;
    }
    // Value
    /**
     * @return {?}
     */
    get value() {
        return this.radioGroup.value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this.radioGroup.value = v;
        this.stateChanges.next();
    }
    // Place holder
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} plh
     * @return {?}
     */
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    // Never be empty
    /**
     * @return {?}
     */
    get empty() {
        return false;
    }
    // should floating 
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return true;
    }
    // required 
    /**
     * @return {?}
     */
    get required() {
        return this.radioGroup.required;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    set required(req) {
        // todo:
        this.radioGroup.required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.radioGroup.disabled;
    }
    /**
     * @param {?} dis
     * @return {?}
     */
    set disabled(dis) {
        this.radioGroup.disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    // Override 
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        // todo:
    }
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            this.radioGroup.writeValue(value);
        }
    }
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.radioGroup.registerOnChange(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.radioGroup.registerOnTouched(fn);
    }
}
// Unique id
RadioGroupFieldControl.nextId = 0;
RadioGroupFieldControl.decorators = [
    { type: Component, args: [{
                selector: 'polp-radio-group-field',
                template: "<mat-radio-group>\n    <mat-radio-button *ngFor=\"let item of radioOptions\" value=\"{{item.value}}\">{{item.text}}</mat-radio-button>\n</mat-radio-group>\n",
                providers: [
                    {
                        provide: MatFormFieldControl,
                        useExisting: RadioGroupFieldControl
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => RadioGroupFieldControl)
                    }
                ],
                styles: [".mat-radio-group .mat-radio-button{margin:0 5px}"]
            }] }
];
/** @nocollapse */
RadioGroupFieldControl.ctorParameters = () => [];
RadioGroupFieldControl.propDecorators = {
    radioGroup: [{ type: ViewChild, args: [MatRadioGroup,] }],
    id: [{ type: HostBinding }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    radioOptions: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }],
    required: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioGroupFieldControl.nextId;
    /** @type {?} */
    RadioGroupFieldControl.prototype.radioGroup;
    /** @type {?} */
    RadioGroupFieldControl.prototype.stateChanges;
    /** @type {?} */
    RadioGroupFieldControl.prototype.id;
    /** @type {?} */
    RadioGroupFieldControl.prototype.focused;
    /** @type {?} */
    RadioGroupFieldControl.prototype.errorState;
    /** @type {?} */
    RadioGroupFieldControl.prototype.controlType;
    /** @type {?} */
    RadioGroupFieldControl.prototype.describedBy;
    /** @type {?} */
    RadioGroupFieldControl.prototype.radioOptions;
    /** @type {?} */
    RadioGroupFieldControl.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    RadioGroupFieldControl.prototype._placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmFkaW8tZ3JvdXAtZmllbGQvcmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsV0FBVyxFQUFFLEtBQUssRUFBa0IsU0FBUyxFQUNyQyxTQUFTLEVBQWEsVUFBVSxFQUMzQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQW1DLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFrQjlELE1BQU0sT0FBTyxzQkFBc0I7SUFnQy9COztRQTFCQSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJcEIsT0FBRSxHQUFHLDZCQUE2QixzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOztRQUduRixZQUFPLEdBQUcsS0FBSyxDQUFDOztRQUdoQixlQUFVLEdBQUcsS0FBSyxDQUFDOztRQUduQixnQkFBVyxHQUFHLG1CQUFtQixDQUFDOztRQUdJLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBUXZELGNBQVMsR0FBYyxJQUFJLENBQUM7SUFFWixDQUFDOzs7OztJQUdqQixJQUNJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBTTtRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBR0QsSUFDSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsSUFBSSxXQUFXLENBQUMsR0FBRztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFJRCxJQUFJLEtBQUs7UUFDTCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7OztJQUdELElBQ0ksZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsSUFDSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEdBQUc7UUFDWixRQUFRO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFDSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEdBQUc7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxHQUFhO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUM5QixRQUFRO0lBQ1osQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQVU7UUFDakIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQzs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O0FBN0dNLDZCQUFNLEdBQUcsQ0FBQyxDQUFDOztZQXpCckIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHdLQUErQztnQkFFL0MsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFdBQVcsRUFBRSxzQkFBc0I7cUJBQ3RDO29CQUNEO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3hEO2lCQUNKOzthQUNKOzs7Ozt5QkFJSSxTQUFTLFNBQUMsYUFBYTtpQkFPdkIsV0FBVzswQkFZWCxXQUFXLFNBQUMsdUJBQXVCOzJCQUduQyxLQUFLO29CQVVMLEtBQUs7MEJBVUwsS0FBSzsrQkFnQkwsV0FBVyxTQUFDLGdCQUFnQjt1QkFNNUIsS0FBSzt1QkFVTCxLQUFLOzs7O0lBcEVOLDhCQUFrQjs7SUFObEIsNENBQW9EOztJQUdwRCw4Q0FBbUM7O0lBSW5DLG9DQUFtRjs7SUFHbkYseUNBQWdCOztJQUdoQiw0Q0FBbUI7O0lBR25CLDZDQUFrQzs7SUFHbEMsNkNBQXVEOztJQUd2RCw4Q0FHRzs7SUFFSCwyQ0FBNEI7Ozs7O0lBdUI1Qiw4Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIENvbXBvbmVudCxcbiAgICBPbkluaXQsIFZpZXdDaGlsZCwgT25EZXN0cm95LCBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ0NvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCwgTWF0UmFkaW9Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1yYWRpby1ncm91cC1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdyYWRpby1ncm91cC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBSYWRpb0dyb3VwRmllbGRDb250cm9sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0dyb3VwRmllbGRDb250cm9sKVxuICAgICAgICB9XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Hcm91cEZpZWxkQ29udHJvbCBpbXBsZW1lbnRzIE1hdEZvcm1GaWVsZENvbnRyb2w8YW55PiwgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIC8vIFZpZXcgY2hpbGRcbiAgICBAVmlld0NoaWxkKE1hdFJhZGlvR3JvdXApIHJhZGlvR3JvdXA6IE1hdFJhZGlvR3JvdXA7XG5cbiAgICAvLyBWYWx1ZVxuICAgIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICAvLyBVbmlxdWUgaWRcbiAgICBzdGF0aWMgbmV4dElkID0gMDtcbiAgICBASG9zdEJpbmRpbmcoKSBpZCA9IGByYWRpby1ncm91cC1maWVsZC1jb250cm9sLSR7UmFkaW9Hcm91cEZpZWxkQ29udHJvbC5uZXh0SWQrK31gO1xuXG4gICAgLy8gRm9jdXNlZCBcbiAgICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgICAvLyBFcnJvciBzdGF0ZVxuICAgIGVycm9yU3RhdGUgPSBmYWxzZTtcblxuICAgIC8vIGNvbnRyb2wgdHlwZVxuICAgIGNvbnRyb2xUeXBlID0gJ3JhZGlvLWdyb3VwLWZpZWxkJztcblxuICAgIC8vIERlc2NyaWJlZCBcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XG5cbiAgICAvLyBTcGVjaWZpYyB0byByYWRpbyBidXR0b25zXG4gICAgQElucHV0KCkgcmFkaW9PcHRpb25zOiBBcnJheTx7XG4gICAgICAgIHZhbHVlOiBhbnk7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICB9PjtcblxuICAgIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvLyBWYWx1ZVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGlvR3JvdXAudmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIGhvbGRlclxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIHNldCBwbGFjZWhvbGRlcihwbGgpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGg7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIC8vIE5ldmVyIGJlIGVtcHR5XG4gICAgZ2V0IGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gc2hvdWxkIGZsb2F0aW5nIFxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKVxuICAgIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyByZXF1aXJlZCBcbiAgICBASW5wdXQoKVxuICAgIGdldCByZXF1aXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaW9Hcm91cC5yZXF1aXJlZDtcbiAgICB9XG4gICAgc2V0IHJlcXVpcmVkKHJlcSkge1xuICAgICAgICAvLyB0b2RvOlxuICAgICAgICB0aGlzLnJhZGlvR3JvdXAucmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpb0dyb3VwLmRpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZWQoZGlzKSB7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpO1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlc2NyaWJlZCBieSBpZHNcbiAgICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICAgIH1cblxuICAgIC8vIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpXG4gICAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvLyB0b2RvOlxuICAgIH1cblxuICAgIC8vIENvbnRyb2wgdmFsdWUgYWNjZXNzb3JcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRvZG86IFdoZW4gd2lsbCB0aGlzIGJlIGludm9rZWQ/Pz9cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5yZWdpc3Rlck9uQ2hhbmdlKGZuKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgICAgICB0aGlzLnJhZGlvR3JvdXAucmVnaXN0ZXJPblRvdWNoZWQoZm4pO1xuICAgIH1cblxufVxuIl19