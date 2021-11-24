import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '../input/interface/option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent {

  @Input() options: Option<any>[]
  @Input() mb: string
  @Input() title: string
  @Input() placeholder: string = "Clique para selecionar";
  @Output() onOptionClick = new EventEmitter();
  @Input() style: string = "select"

  constructor() { }

  val: any;

  getOptionValue() {

  }

  onChange: any = () => { }
  onTouch: any = () => { }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      this.onChange(val)
      this.onTouch(val)
    }
  }

  writeValue(obj: any): void {
    this.value = obj;

  }

  registerOnChange(fn: any) { this.onChange = fn }

  registerOnTouched(fn: any) { this.onTouch = fn }

  setDisabledState?(isDisabled: boolean): void { }

}
