import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RutValueAccessor implements ControlValueAccessor {
    private renderer;
    private elementRef;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RutValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RutValueAccessor, "input[formatRut]", never, {}, {}, never, never, false, never>;
}
