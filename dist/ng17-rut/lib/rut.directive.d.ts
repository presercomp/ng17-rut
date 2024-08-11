import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RutDirective {
    rutChange: EventEmitter<any>;
    allowedKeys: string[];
    constructor();
    onFocus(ev: Event): void;
    onBlur(ev: Event): void;
    onChange(ev: Event): void;
    onKeyDown(event: KeyboardEvent): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RutDirective, "[formatRut]", never, {}, { "rutChange": "rutChange"; }, never, never, false, never>;
}
