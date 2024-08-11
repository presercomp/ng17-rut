import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from './rut.helpers';
import * as i0 from "@angular/core";
export class RutDirective {
    constructor() {
        this.allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "k", "K", "-", "Backspace", "ArrowLeft", "ArrowRight", "Tab"];
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
    }
    onKeyDown(event) {
        return this.allowedKeys.includes(event.key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RutDirective, selector: "[formatRut]", outputs: { rutChange: "rutChange" }, host: { listeners: { "blur": "onBlur($event)", "focus": "onFocus($event)", "input": "onChange($event)", "keydown": "onKeyDown($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[formatRut]',
                    host: {
                        '(blur)': 'onBlur($event)',
                        '(focus)': 'onFocus($event)',
                        '(input)': 'onChange($event)',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { rutChange: [{
                type: Output
            }], onKeyDown: [{
                type: HostListener,
                args: ["keydown", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMTctcnV0L3NyYy9saWIvcnV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFDOztBQVU1QyxNQUFNLE9BQU8sWUFBWTtJQUt2QjtRQUZBLGdCQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFHN0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxPQUFPLENBQUMsRUFBUztRQUN0QixJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBUztRQUNyQixJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBRU0sUUFBUSxDQUFDLEVBQVM7UUFDdkIsSUFBSSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUdNLFNBQVMsQ0FBQyxLQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOytHQTNCVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBUnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLElBQUksRUFBRTt3QkFDSixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixTQUFTLEVBQUUsaUJBQWlCO3dCQUM1QixTQUFTLEVBQUUsa0JBQWtCO3FCQUM5QjtpQkFDRjt3REFFa0IsU0FBUztzQkFBekIsTUFBTTtnQkF3QkEsU0FBUztzQkFEZixZQUFZO3VCQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHJ1dEhlbHBlcnMgZnJvbSAnLi9ydXQuaGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb3JtYXRSdXRdJyxcbiAgaG9zdDoge1xuICAgICcoYmx1ciknOiAnb25CbHVyKCRldmVudCknLFxuICAgICcoZm9jdXMpJzogJ29uRm9jdXMoJGV2ZW50KScsXG4gICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcnV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBhbGxvd2VkS2V5cyA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCJrXCIsIFwiS1wiLCBcIi1cIiwgXCJCYWNrc3BhY2VcIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwiVGFiXCJdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucnV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXMoZXY6IEV2ZW50KSB7XG4gICAgbGV0IGh0bWxJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXYudGFyZ2V0O1xuICAgIGh0bWxJbnB1dEVsZW1lbnQudmFsdWUgPSBydXRIZWxwZXJzLnJ1dENsZWFuKGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uQmx1cihldjogRXZlbnQpIHtcbiAgICBsZXQgaHRtbElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldi50YXJnZXQ7XG4gICAgaHRtbElucHV0RWxlbWVudC52YWx1ZSA9IHJ1dEhlbHBlcnMucnV0Rm9ybWF0KGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpIHx8ICcnO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2OiBFdmVudCkge1xuICAgIGxldCBodG1sSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGV2LnRhcmdldDtcbiAgICB0aGlzLnJ1dENoYW5nZS5lbWl0KHJ1dEhlbHBlcnMucnV0Q2xlYW4oaHRtbElucHV0RWxlbWVudC52YWx1ZSkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KXtcbiAgICByZXR1cm4gdGhpcy5hbGxvd2VkS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpO1xuICB9XG59Il19