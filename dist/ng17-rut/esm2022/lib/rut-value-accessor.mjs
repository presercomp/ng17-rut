import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from './rut.helpers';
import * as i0 from "@angular/core";
const RUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RutValueAccessor),
    multi: true,
};
export class RutValueAccessor {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        let normalizedValue = rutFormat(value) || '';
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutValueAccessor, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: RutValueAccessor, selector: "input[formatRut]", host: { listeners: { "rutChange": "onChange($event)", "blur": "onTouched($event)" } }, providers: [RUT_VALUE_ACCESSOR], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[formatRut]',
                    host: {
                        '(rutChange)': 'onChange($event)',
                        '(blur)': 'onTouched($event)',
                    },
                    providers: [RUT_VALUE_ACCESSOR],
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcxNy1ydXQvc3JjL2xpYi9ydXQtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTFDLE1BQU0sa0JBQWtCLEdBQVE7SUFDOUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVVGLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFDVSxRQUFtQixFQUNuQixVQUFzQjtRQUR0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFHekIsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFhLENBQUMsQ0FBQztRQUNwQyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQWEsQ0FBQyxDQUFDO0lBSHRDLENBQUM7SUFLQSxVQUFVLENBQUMsS0FBVTtRQUMxQixJQUFJLGVBQWUsR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBb0IsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsaUJBQWlCLENBQUMsRUFBYyxJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs4R0FmNUQsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isa0lBRmhCLENBQUMsa0JBQWtCLENBQUM7OzJGQUVwQixnQkFBZ0I7a0JBUjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNKLGFBQWEsRUFBRSxrQkFBa0I7d0JBQ2pDLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCO29CQUNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBydXRGb3JtYXQgfSBmcm9tICcuL3J1dC5oZWxwZXJzJztcblxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBSVVRfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJ1dFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W2Zvcm1hdFJ1dF0nLFxuICBob3N0OiB7XG4gICAgJyhydXRDaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCRldmVudCknLFxuICB9LFxuICBwcm92aWRlcnM6IFtSVVRfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBSdXRWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICkgeyB9XG5cbiAgcHVibGljIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IC8qRW1wdHkqLyB9O1xuICBwdWJsaWMgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IC8qRW1wdHkqLyB9O1xuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlOiBzdHJpbmcgPSBydXRGb3JtYXQodmFsdWUpIHx8ICcnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbn1cbiJdfQ==