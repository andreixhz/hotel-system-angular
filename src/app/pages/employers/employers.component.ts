import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/service/header.service';
import { EmployerService } from 'src/app/services/http/employer.service';
import { OccupationService } from 'src/app/services/http/occupation.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.sass']
})
export class EmployersComponent implements OnInit {

  filterItems = [
    {
      data: 'nome',
      title: 'Nome',
      validators: [Validators.required],
      type: 'text'
    },
    {
      data: 'cpf',
      title: 'CPF',
      validators: [Validators.required],
      type: 'text'
    },
    {
      data: 'email',
      title: 'Email',
      validators: [Validators.required, Validators.email],
      type: 'text'
    },
    {
      data: 'telefone',
      title: "Telefone",
      Validators: [Validators.required],
      type: 'text'
    },
    {
      data: 'cargo',
      title: "Cargo",
      type: 'select',
      options: []
    }
  ]

  dataSource: any[] = [];

  displayedColumns: string[] = ['idFuncionario', 'nome', 'email', 'telefone', 'cpf', 'cargo', 'delete'];

  constructor(
    private headerService: HeaderService,
    private employerService: EmployerService,
    private occupation: OccupationService
  ) {
    headerService.setHeader("Funcionarios", "Listagem de funcionarios")
  }

  async ngOnInit() {

    this.dataSource = (await this.employerService.list().pipe(take(1)).toPromise()).payload
    this.filterItems[4].options = (await this.occupation.list().pipe(take(1)).toPromise()).payload.map((option) => ({ value: option.idOcupacao, title: option.nome }))

  }

  handleSearch(data: any) {
    console.log(data)
  }

  handleDelete(id: number) {

    this.employerService.delete(id).subscribe(
      () => {
        this.dataSource = this.dataSource.filter((g) => g.idFuncionario !== id)
      }
    )

  }


}
