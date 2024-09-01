import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rutValidate } from './rut.helpers';
import * as i0 from "@angular/core";
export function validateRutFactory(rutValidate) {
    return (c) => {
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
export class RutValidator {
    constructor() {
        this.validator = validateRutFactory(rutValidate);
    }
    validate(c) {
        return this.validator(c);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: RutValidator, selector: "[validateRut][ngModel],[validateRut][formControl]", providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validateRut][ngModel],[validateRut][formControl]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMTctcnV0L3NyYy9saWIvcnV0LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFNUMsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFdBQXFCO0lBQ3RELE9BQU8sQ0FBQyxDQUFjLEVBQUUsRUFBRTtRQUN4QixPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVFELE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sUUFBUSxDQUFDLENBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OEdBVFUsWUFBWTtrR0FBWixZQUFZLDRFQUpaO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNyRjs7MkZBRVUsWUFBWTtrQkFOeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbURBQW1EO29CQUM3RCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3JGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJ1dFZhbGlkYXRlIH0gZnJvbSAnLi9ydXQuaGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVJ1dEZhY3RvcnkocnV0VmFsaWRhdGU6IEZ1bmN0aW9uKSB7XG4gIHJldHVybiAoYzogRm9ybUNvbnRyb2wpID0+IHtcbiAgICByZXR1cm4gcnV0VmFsaWRhdGUoYy52YWx1ZSkgPyBudWxsIDogeyBpbnZhbGlkUnV0OiB0cnVlIH07XG4gIH07XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t2YWxpZGF0ZVJ1dF1bbmdNb2RlbF0sW3ZhbGlkYXRlUnV0XVtmb3JtQ29udHJvbF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJ1dFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dFZhbGlkYXRvciB7XG4gIHByaXZhdGUgdmFsaWRhdG9yOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRlUnV0RmFjdG9yeShydXRWYWxpZGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cbn1cbiJdfQ==