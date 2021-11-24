import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HeaderService } from 'src/app/core/service/header.service';
import { GuestsService } from 'src/app/services/http/guests.service';
import { Guest } from './interfaces/guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.sass']
})
export class GuestsComponent implements OnInit {

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
      data: 'lastCheckin',
      title: "Ultimo check-in",
      type: 'date'
    }
  ]

  dataSource: Guest[] = []

  displayedColumns: string[] = ['idHospede', 'nome', 'email', 'telefone', 'cpf', 'delete'];

  constructor(
    private headerService: HeaderService,
    private guestService: GuestsService
  ) {
    headerService.setHeader("Hospedes", "Listagem de Hospedes")
  }

  ngOnInit(): void {

    this.guestService.list().subscribe((res) => {
      this.dataSource = res.payload
    })

  }

  handleSearch(data: any) {

    console.log(data)

  }

  handleDelete(id: number) {

    this.guestService.delete(id).subscribe(
      () => {
        this.dataSource = this.dataSource.filter((g) => g.idHospede !== id)
      }
    )

  }

}
