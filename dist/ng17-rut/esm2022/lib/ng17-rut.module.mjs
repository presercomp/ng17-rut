import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RutPipe } from './rut.pipe';
import { RutValidator } from './rut.validator';
import { RutDirective } from './rut.directive';
import { RutValueAccessor } from './rut-value-accessor';
import * as i0 from "@angular/core";
export { RutPipe } from './rut.pipe';
export { RutValidator } from './rut.validator';
export { RutDirective } from './rut.directive';
export class Ng17RutModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcxNy1ydXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcxNy1ydXQvc3JjL2xpYi9uZzE3LXJ1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUd4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFzQi9DLE1BQU0sT0FBTyxhQUFhOytHQUFiLGFBQWE7Z0hBQWIsYUFBYSxpQkFmdEIsT0FBTztZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osZ0JBQWdCLGFBTmhCLFdBQVcsYUFZWCxPQUFPO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixnQkFBZ0I7Z0hBR1AsYUFBYSxhQVZiO1lBQ1QsWUFBWTtTQUNiLFlBVkMsV0FBVzs7NEZBa0JGLGFBQWE7a0JBcEJ6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWixPQUFPO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxPQUFPO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSdXRQaXBlIH0gZnJvbSAnLi9ydXQucGlwZSc7XG5pbXBvcnQgeyBSdXRWYWxpZGF0b3IgfSBmcm9tICcuL3J1dC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUnV0RGlyZWN0aXZlIH0gZnJvbSAnLi9ydXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJ1dFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3J1dC12YWx1ZS1hY2Nlc3Nvcic7XG5cblxuZXhwb3J0IHsgUnV0UGlwZSB9IGZyb20gJy4vcnV0LnBpcGUnO1xuZXhwb3J0IHsgUnV0VmFsaWRhdG9yIH0gZnJvbSAnLi9ydXQudmFsaWRhdG9yJztcbmV4cG9ydCB7IFJ1dERpcmVjdGl2ZSB9IGZyb20gJy4vcnV0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUnV0UGlwZSxcbiAgICBSdXREaXJlY3RpdmUsXG4gICAgUnV0VmFsaWRhdG9yLFxuICAgIFJ1dFZhbHVlQWNjZXNzb3JcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUnV0VmFsaWRhdG9yLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUnV0UGlwZSxcbiAgICBSdXREaXJlY3RpdmUsXG4gICAgUnV0VmFsaWRhdG9yLFxuICAgIFJ1dFZhbHVlQWNjZXNzb3IsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nMTdSdXRNb2R1bGUgeyB9XG4iXX0=