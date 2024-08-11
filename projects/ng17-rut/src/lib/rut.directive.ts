import {Directive, HostListener, ElementRef, EventEmitter, Output} from '@angular/core';
import * as rutHelpers from './rut.helpers';

@Directive({
  selector: '[formatRut]',
  host: {
    '(blur)': 'onBlur($event)',
    '(focus)': 'onFocus($event)',
    '(input)': 'onChange($event)',
  },
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "k", "K", "-", "Backspace", "ArrowLeft", "ArrowRight", "Tab"];

  constructor() {
    this.rutChange = new EventEmitter();
  }

  public onFocus(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
  }

  public onBlur(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
  }

  public onChange(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
  }

  @HostListener("keydown", ["$event"])
  public onKeyDown(event: KeyboardEvent){
    return this.allowedKeys.includes(event.key);
  }
}