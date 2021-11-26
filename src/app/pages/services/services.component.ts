import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/service/header.service';
import { ServiceService } from 'src/app/services/http/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  filterItems = [
    {
      data: 'nome',
      title: 'Numero',
      validators: [Validators.required],
      type: 'text'
    },
    {
      data: 'descricao',
      title: 'Descrição',
      validators: [Validators.required],
      type: 'select'
    }
  ]

  rows: any[] = []

  constructor(
    private headerService: HeaderService,
    private serviceServices: ServiceService
  ) {
    headerService.setHeader("Serviços", "Listagem de Serviços")
  }

  async ngOnInit() {
    this.rows = (await this.serviceServices.list().pipe(take(1)).toPromise()).payload

  }

  handleSearch(e: any) {

  }


  handleDelete(id: number) {

    this.serviceServices.delete(id).subscribe(
      () => {
        this.rows = this.rows.filter((g) => g.idServico !== id)
      }
    )

  }

}
