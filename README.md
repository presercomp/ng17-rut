Angular 17 RUT
=============

Libería Angular 17 con varios componentes para manejar la validación, limpieza y formato del [RUT Chileno](https://en.wikipedia.org/wiki/National_identification_number#Chile).

## Instalación

```bash
yarn add ng17-rut
# or
npm install ng17-rut --save
```

## Uso

### Configuración:

La manera más fácil de usar esta libería es importar Ng17Rut en el módulo principal de tu aplicación:

```typescript
import { NgModule } from '@angular/core';
import { Ng17Rut } from 'ng17-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  ...
  imports: [
    BrowserModule,
    Ng17Rut
  ],
})
class DemoAppModule { }
```

See `./demo` folder for a fully working example.

### Usándolo:

ng17-rut expone múltiples caracterísiticas que pueden ser utilizadas para realizar validación y formateo de entradas. Probablemente quieras usar una de las siguientes

- `RutValidator`: Expone la directiva `validateRut` (para adjuntar a modelos o entradas) y la directiva RutValidator para ser usasda como `Validator` en formularios reactivos.
- `RutPipe`: Expone el pipe `RutPipe` para formatear números de rut en plantillas
- `RutDirective`: Expone la directiva `formatRut` para formatear entradas de RUT

#### RutValidator

##### Formularios reactivos

```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
export class DemoAppComponent {
  constructor (fb: FormBuilder, rutValidator: RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rutValidator]]
    });
  }
}

```

##### Formularios de plantilla
```html
<input [(ngModel)]="user.rut" name="rut" validateRut required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

#### formatRut (Directiva)
```html
<input [(ngModel)]="user.rut" name="rut" formatRut required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```

## Credits

Fork original de ng16-rut de [odisleysi](https://github.com/odisleysi/ng16-rut);
a su vez, Fork de [platanous](https://github.com/platanus/ng2-rut)

ng17-rut is maintained by [presercomp](https://github.com/presercomp).

## License

Angular 17 RUT is © 2024 PREESCOMP. Es un software libre y puede ser redistribuido bajo los términos especificados en el archivo de LICENCIA.

