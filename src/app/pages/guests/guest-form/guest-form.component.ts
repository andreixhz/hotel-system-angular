import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/core/service/header.service';
import { GuestsService } from 'src/app/services/http/guests.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.sass']
})
export class GuestFormComponent implements OnInit {

  loading: boolean = false;
  id?: number;

  form: FormGroup;

  constructor(
    private headerService: HeaderService,
    private guestService: GuestsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  async ngOnInit() {

    this.id = (await this.route.params.pipe(take(1)).toPromise()).id;

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


    if (this.id) {

      this.headerService.setHeader("Hospedes", "Edição de Hospedes")

      const data = (await this.guestService.get(this.id).pipe(take(1)).toPromise()).payload;

      this.form.setValue(
        data
      )

    } else {

      this.headerService.setHeader("Hospedes", "Cadastro de Hospedes")

    }

    this.headerService.backTo("hospede")

  }

  canSave() {

    if (this.loading) {
      return true;
    }

    return this.form.invalid

  }

  handleCreate() {

    this.loading = true;

    this.guestService.post(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/hospede']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }

  handleEdit() {

    this.loading = true;

    this.guestService.put(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/hospede']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }

}
