import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.sass']
})
export class InputDateComponent implements OnInit, ControlValueAccessor {

  @Input() title: string = ''

  val: string = ""
  disabled: boolean = false;

  constructor() { }

  onChange: any = () => { }
  onTouch: any = () => { }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      this.onChange(val)
      this.onTouch(val)
    }
  }

  get value() {
    return this.val;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    console.log(this.val)
  }


}
