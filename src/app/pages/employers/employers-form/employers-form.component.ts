import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Option } from 'src/app/components/input/interface/option';
import { HeaderService } from 'src/app/core/service/header.service';
import { EmployerService } from 'src/app/services/http/employer.service';
import { OccupationService } from 'src/app/services/http/occupation.service';

@Component({
  selector: 'app-employers-form',
  templateUrl: './employers-form.component.html',
  styleUrls: ['./employers-form.component.sass']
})
export class EmployersFormComponent implements OnInit {

  loading: boolean = false;
  id: number;

  form?: FormGroup;

  occupationOption: Option<any>[] = [];
  occupationList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employerService: EmployerService,
    private router: Router,
    private occupation: OccupationService,
    private headerService: HeaderService
  ) { }

  async ngOnInit() {

    this.id = (await this.route.params.pipe(take(1)).toPromise()).id;

    this.occupationList = (await this.occupation.list().pipe(take(1)).toPromise()).payload
    this.occupationOption = this.occupationList.map((option) => ({ value: option.idOcupacao, title: option.nome }))

    this.form = this.formBuilder.group({
      idFuncionario: [''],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      senha: ['', !this.id ? [Validators.required] : []],
      idOcupacao: ['', [Validators.required]],
      created_at: [''],
      updated_at: ['']
    })

    if (this.id) {

      this.headerService.setHeader("Funcionarios", "Edição de funcionarios")

      let data = (await this.employerService.get(this.id).pipe(take(1)).toPromise()).payload;

      data.idOcupacao = {
        id: data.ocupacao.idOcupacao,
        title: data.ocupacao.nome
      };
      delete data.ocupacao;

      this.form.setValue(
        {
          ...data
        }
      )

    } else {

      this.headerService.setHeader("Funcionarios", "Cadastro de funcionarios")

    }

    this.headerService.backTo("funcionario")

  }

  canSave() {

    if (this.loading) {
      return true;
    }

    return this.form.invalid

  }

  handleCreate() {

    this.loading = true

    this.employerService.post(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/funcionario']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }

  handleEdit() {
    this.loading = true
    let formValue = this.form.value;

    formValue.ocupacao =
      this.occupationList.find((o) => o.idOcupacao === formValue.idOcupacao.value)

    delete formValue.idOcupacao

    this.employerService.put(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/funcionario']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }

}
