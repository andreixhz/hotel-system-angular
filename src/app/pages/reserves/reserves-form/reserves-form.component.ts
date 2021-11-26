import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserves-form',
  templateUrl: './reserves-form.component.html',
  styleUrls: ['./reserves-form.component.sass']
})
export class ReservesFormComponent implements OnInit {

  loading: boolean = false;
  id?: number;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      idHospede: [''],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      senha: ['', !this.id ? [Validators.required] : []],
      created_at: [''],
      updated_at: ['']
    })

  }

  canSave() {

    if (this.loading) {
      return true;
    }

    return this.form.invalid

  }

  handleCreate() {

    this.loading = true;

    // this.guestService.post(this.form.value).subscribe(
    //   (res) => { this.router.navigate(['dashboard/hospede']) },
    //   (err) => { this.loading = false },
    //   () => { this.loading = false },
    // )

  }

  handleEdit() {

    // this.loading = true;

    // this.guestService.put(this.form.value).subscribe(
    //   (res) => { this.router.navigate(['dashboard/hospede']) },
    //   (err) => { this.loading = false },
    //   () => { this.loading = false },
    // )

  }

}
