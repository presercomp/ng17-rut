import { Pipe } from '@angular/core';
import { rutFormat } from './rut.helpers';
import * as i0 from "@angular/core";
export class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: RutPipe, name: "rut" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RutPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'rut',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzE3LXJ1dC9zcmMvbGliL3J1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFDLE1BQU0sT0FBTyxPQUFPO0lBQ1gsU0FBUyxDQUFDLEtBQWE7UUFDNUIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs4R0FIVSxPQUFPOzRHQUFQLE9BQU87OzJGQUFQLE9BQU87a0JBSG5CLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBydXRGb3JtYXQgfSBmcm9tICcuL3J1dC5oZWxwZXJzJztcblxuQFBpcGUoe1xuICBuYW1lOiAncnV0Jyxcbn0pXG5leHBvcnQgY2xhc3MgUnV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBydXRGb3JtYXQodmFsdWUpO1xuICB9XG59XG4iXX0=