import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/service/header.service';
import { ServiceService } from 'src/app/services/http/service.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.sass']
})
export class ServicesFormComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    descricao: ['', []],
    created_at: [''],
    updated_at: ['']
  })

  id?: number;
  loading: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private servicesServices: ServiceService,
    private router: Router
  ) {
  }

  async ngOnInit() {

    this.id = (await this.route.params.pipe(take(1)).toPromise()).id;

    this.form = this.formBuilder.group({
      idServico: [''],
      nome: ['', [Validators.required]],
      descricao: ['', []],
      valor: ['', [Validators.required]],
      created_at: [''],
      updated_at: ['']
    })


    if (this.id) {

      this.headerService.setHeader("Serviços", "Edição de Serviços")

      const data = (await this.servicesServices.get(this.id).pipe(take(1)).toPromise()).payload;

      this.form.setValue(
        data
      )

    } else {

      this.headerService.setHeader("Serviços", "Criação de Serviços")

    }

    this.headerService.backTo('service');

  }

  canSave() {

    if (this.loading) {
      return true;
    }

    return this.form.invalid

  }

  handleCreate() {

    this.loading = true;

    this.servicesServices.post(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/service']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }


  handleEdit() {

    this.loading = true;

    this.servicesServices.put(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/service']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }


}
