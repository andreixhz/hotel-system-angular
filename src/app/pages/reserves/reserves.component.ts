import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.sass']
})
export class ReservesComponent implements OnInit {

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
    }
  ]

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Reservas", "Listagem de Reservas")
  }

  ngOnInit(): void {
  }

  handleSearch(event: any) {
    console.log(event)
  }

}
