import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare function validateRutFactory(rutValidate: Function): (c: FormControl) => {
    invalidRut: boolean;
} | null;
export declare class RutValidator {
    private validator;
    constructor();
    validate(c: FormControl): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RutValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RutValidator, "[validateRut][ngModel],[validateRut][formControl]", never, {}, {}, never, never, false, never>;
}
