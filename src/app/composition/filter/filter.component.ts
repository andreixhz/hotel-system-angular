import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  @Input() data: any[] = []
  @Output() onSearch = new EventEmitter();

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    const formFields = this.data.reduce((a, b) => ({ ...a, [b.data]: [b.value || '', b.validators] }), {})

    this.formGroup = this.formBuilder.group(
      formFields
    )

  }

}
