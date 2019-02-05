/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostBinding, Input, Component, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldControl, MatRadioGroup } from "@angular/material";
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
var RadioGroupFieldControl = /** @class */ (function () {
    function RadioGroupFieldControl() {
        // Value
        this.stateChanges = new Subject();
        this.id = "radio-group-field-control-" + RadioGroupFieldControl.nextId++;
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
    Object.defineProperty(RadioGroupFieldControl.prototype, "value", {
        // Value
        get: 
        // Value
        /**
         * @return {?}
         */
        function () {
            return this.radioGroup.value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.radioGroup.value = v;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "placeholder", {
        // Place holder
        get: 
        // Place holder
        /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} plh
         * @return {?}
         */
        function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "empty", {
        // Never be empty
        get: 
        // Never be empty
        /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "shouldLabelFloat", {
        // should floating 
        get: 
        // should floating 
        /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "required", {
        // required 
        get: 
        // required 
        /**
         * @return {?}
         */
        function () {
            return this.radioGroup.required;
        },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            // todo:
            this.radioGroup.required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupFieldControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.radioGroup.disabled;
        },
        set: /**
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this.radioGroup.disabled = coerceBooleanProperty(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioGroupFieldControl.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    // Override 
    // Override 
    /**
     * @return {?}
     */
    RadioGroupFieldControl.prototype.ngOnDestroy = 
    // Override 
    /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    // set described by ids
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    RadioGroupFieldControl.prototype.setDescribedByIds = 
    // set described by ids
    /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.describedBy = ids.join(' ');
    };
    // onContainerClick(event: MouseEvent)
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    RadioGroupFieldControl.prototype.onContainerClick = 
    // onContainerClick(event: MouseEvent)
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // todo:
    };
    // Control value accessor
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupFieldControl.prototype.writeValue = 
    // Control value accessor
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this.radioGroup.writeValue(value);
        }
    };
    // todo: When will this be invoked???
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupFieldControl.prototype.registerOnChange = 
    // todo: When will this be invoked???
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.radioGroup.registerOnChange(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupFieldControl.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.radioGroup.registerOnTouched(fn);
    };
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
                            useExisting: forwardRef(function () { return RadioGroupFieldControl; })
                        }
                    ],
                    styles: [".mat-radio-group .mat-radio-button{margin:0 5px}"]
                }] }
    ];
    /** @nocollapse */
    RadioGroupFieldControl.ctorParameters = function () { return []; };
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
    return RadioGroupFieldControl;
}());
export { RadioGroupFieldControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL21kLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmFkaW8tZ3JvdXAtZmllbGQvcmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsV0FBVyxFQUFFLEtBQUssRUFBa0IsU0FBUyxFQUNyQyxTQUFTLEVBQWEsVUFBVSxFQUMzQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQW1DLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQ7SUFnREk7O1FBMUJBLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUlwQixPQUFFLEdBQUcsK0JBQTZCLHNCQUFzQixDQUFDLE1BQU0sRUFBSSxDQUFDOztRQUduRixZQUFPLEdBQUcsS0FBSyxDQUFDOztRQUdoQixlQUFVLEdBQUcsS0FBSyxDQUFDOztRQUduQixnQkFBVyxHQUFHLG1CQUFtQixDQUFDOztRQUdJLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBUXZELGNBQVMsR0FBYyxJQUFJLENBQUM7SUFFWixDQUFDO0lBR2pCLHNCQUNJLHlDQUFLO1FBRlQsUUFBUTs7Ozs7O1FBQ1I7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUM7Ozs7O1FBQ0QsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENB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SUksU0FBUyxTQUFDLGFBQWE7cUJBT3ZCLFdBQVc7OEJBWVgsV0FBVyxTQUFDLHVCQUF1QjsrQkFHbkMsS0FBSzt3QkFVTCxLQUFLOzhCQVVMLEtBQUs7bUNBZ0JMLFdBQVcsU0FBQyxnQkFBZ0I7MkJBTTVCLEtBQUs7MkJBVUwsS0FBSzs7SUEyQ1YsNkJBQUM7Q0FBQSxBQXhJRCxJQXdJQztTQXhIWSxzQkFBc0I7OztJQVMvQiw4QkFBa0I7O0lBTmxCLDRDQUFvRDs7SUFHcEQsOENBQW1DOztJQUluQyxvQ0FBbUY7O0lBR25GLHlDQUFnQjs7SUFHaEIsNENBQW1COztJQUduQiw2Q0FBa0M7O0lBR2xDLDZDQUF1RDs7SUFHdkQsOENBR0c7O0lBRUgsMkNBQTRCOzs7OztJQXVCNUIsOENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBIb3N0QmluZGluZywgSW5wdXQsIE9wdGlvbmFsLCBTZWxmLCBDb21wb25lbnQsXG4gICAgT25Jbml0LCBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wsIE1hdFJhZGlvR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtcmFkaW8tZ3JvdXAtZmllbGQnLFxuICAgIHRlbXBsYXRlVXJsOiAncmFkaW8tZ3JvdXAtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JhZGlvLWdyb3VwLWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogUmFkaW9Hcm91cEZpZWxkQ29udHJvbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9Hcm91cEZpZWxkQ29udHJvbClcbiAgICAgICAgfVxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvR3JvdXBGaWVsZENvbnRyb2wgaW1wbGVtZW50cyBNYXRGb3JtRmllbGRDb250cm9sPGFueT4sIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICAvLyBWaWV3IGNoaWxkXG4gICAgQFZpZXdDaGlsZChNYXRSYWRpb0dyb3VwKSByYWRpb0dyb3VwOiBNYXRSYWRpb0dyb3VwO1xuXG4gICAgLy8gVmFsdWVcbiAgICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgLy8gVW5pcXVlIGlkXG4gICAgc3RhdGljIG5leHRJZCA9IDA7XG4gICAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgcmFkaW8tZ3JvdXAtZmllbGQtY29udHJvbC0ke1JhZGlvR3JvdXBGaWVsZENvbnRyb2wubmV4dElkKyt9YDtcblxuICAgIC8vIEZvY3VzZWQgXG4gICAgZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgLy8gRXJyb3Igc3RhdGVcbiAgICBlcnJvclN0YXRlID0gZmFsc2U7XG5cbiAgICAvLyBjb250cm9sIHR5cGVcbiAgICBjb250cm9sVHlwZSA9ICdyYWRpby1ncm91cC1maWVsZCc7XG5cbiAgICAvLyBEZXNjcmliZWQgXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xuXG4gICAgLy8gU3BlY2lmaWMgdG8gcmFkaW8gYnV0dG9uc1xuICAgIEBJbnB1dCgpIHJhZGlvT3B0aW9uczogQXJyYXk8e1xuICAgICAgICB2YWx1ZTogYW55O1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfT47XG5cbiAgICBuZ0NvbnRyb2w6IE5nQ29udHJvbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy8gVmFsdWVcbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpb0dyb3VwLnZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC52YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSBob2xkZXJcbiAgICBASW5wdXQoKVxuICAgIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBzZXQgcGxhY2Vob2xkZXIocGxoKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxoO1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICAvLyBOZXZlciBiZSBlbXB0eVxuICAgIGdldCBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHNob3VsZCBmbG9hdGluZyBcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsb2F0aW5nJylcbiAgICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gcmVxdWlyZWQgXG4gICAgQElucHV0KClcbiAgICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGlvR3JvdXAucmVxdWlyZWQ7XG4gICAgfVxuICAgIHNldCByZXF1aXJlZChyZXEpIHtcbiAgICAgICAgLy8gdG9kbzpcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnJlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaW9Hcm91cC5kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKGRpcykge1xuICAgICAgICB0aGlzLnJhZGlvR3JvdXAuZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIHNldCBkZXNjcmliZWQgYnkgaWRzXG4gICAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICAvLyBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KVxuICAgIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy8gdG9kbzpcbiAgICB9XG5cbiAgICAvLyBDb250cm9sIHZhbHVlIGFjY2Vzc29yXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0b2RvOiBXaGVuIHdpbGwgdGhpcyBiZSBpbnZva2VkPz8/XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgICAgICB0aGlzLnJhZGlvR3JvdXAucmVnaXN0ZXJPbkNoYW5nZShmbik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnJlZ2lzdGVyT25Ub3VjaGVkKGZuKTtcbiAgICB9XG5cbn1cbiJdfQ==