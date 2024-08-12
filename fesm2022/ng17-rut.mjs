import * as i0 from '@angular/core';
import { Pipe, EventEmitter, Directive, Output, HostListener, forwardRef, NgModule } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

function rutClean(value) {
    if (typeof value === 'string') {
        return value
            .replace(/[^0-9kK]+/g, '')
            .replace(/^0+/, '')
            .toUpperCase();
    }
    return '';
}
function rutValidate(value) {
    if (typeof value !== 'string') {
        return false;
    }
    if (/[A-Za-z]/g.test(value.replace(/[kK]/g, ''))) {
        return false;
    }
    const rut = rutClean(value);
    let rutDigits = parseInt(rut.slice(0, -1), 10);
    let m = 0;
    let s = 1;
    while (rutDigits > 0) {
        s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
        rutDigits = Math.floor(rutDigits / 10);
    }
    const checkDigit = (s > 0) ? String((s - 1)) : 'K';
    return (checkDigit === rut.slice(-1));
}
function rutFormat(value) {
    const rut = rutClean(value);
    if (rut.length <= 1) {
        return rut;
    }
    let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
    for (let i = 4; i < rut.length; i += 3) {
        result = `${rut.slice(-3 - i, -i)}.${result}`;
    }
    return result;
}

class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: RutPipe, name: "rut" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'rut',
                }]
        }] });

class RutDirective {
    constructor() {
        this.allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "k", "K", "-", "Backspace", "ArrowLeft", "ArrowRight", "Tab"];
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutClean(htmlInputElement.value));
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

function validateRutFactory(rutValidate) {
    return (c) => {
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
class RutValidator {
    constructor() {
        this.validator = validateRutFactory(rutValidate);
    }
    validate(c) {
        return this.validator(c);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RutValidator, selector: "[validateRut][ngModel],[validateRut][formControl]", providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validateRut][ngModel],[validateRut][formControl]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
                    ],
                }]
        }], ctorParameters: () => [] });

const RUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RutValueAccessor),
    multi: true,
};
class RutValueAccessor {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutValueAccessor, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RutValueAccessor, selector: "input[formatRut]", host: { listeners: { "rutChange": "onChange($event)", "blur": "onTouched($event)" } }, providers: [RUT_VALUE_ACCESSOR], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RutValueAccessor, decorators: [{
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

class Ng17RutModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng17RutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: Ng17RutModule, declarations: [RutPipe,
            RutDirective,
            RutValidator,
            RutValueAccessor], imports: [FormsModule], exports: [RutPipe,
            RutDirective,
            RutValidator,
            RutValueAccessor] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng17RutModule, providers: [
            RutValidator,
        ], imports: [FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng17RutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: [
                        RutPipe,
                        RutDirective,
                        RutValidator,
                        RutValueAccessor
                    ],
                    providers: [
                        RutValidator,
                    ],
                    exports: [
                        RutPipe,
                        RutDirective,
                        RutValidator,
                        RutValueAccessor,
                    ],
                }]
        }] });

/*
 * Public API Surface of ng17-rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng17RutModule, RutDirective, RutPipe, RutValidator, RutValueAccessor, validateRutFactory };
//# sourceMappingURL=ng17-rut.mjs.map
