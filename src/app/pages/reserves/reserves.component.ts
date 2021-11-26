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
      data: 'protocolo',
      title: 'Protocolo',
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
      data: 'checkin',
      title: 'Check-in',
      validators: [Validators.required, Validators.email],
      type: 'date'
    },
    {
      data: 'checkout',
      title: 'Check-out',
      validators: [Validators.required, Validators.email],
      type: 'date'
    }
  ]

  dataSource: any[] = []
  displayedColumns: string[] = ['protocolo', 'cpf', 'checkin', 'checkout', 'delete'];

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
