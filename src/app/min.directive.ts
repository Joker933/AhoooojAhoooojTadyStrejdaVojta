import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validators} from "@angular/forms";

@Directive({
  selector: '[appMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDirective, multi: true}]
})
export class MinDirective extends Validators{

  pMin!: number | string;

  constructor(private readonly el: ElementRef<HTMLElement>) {
    super();

  }

  @Input('appMin')
  set max(value: number | string) {
    this.pMin = value;
    this.el.nativeElement.setAttribute('min',`${value}`);
  }

  validate(control: AbstractControl): Validators | null {
    const value = control.value;
    if (typeof value === 'number' && value < this.pMin){
      return {min: {min: this.pMin}};
    }
    return null;
  }
}
